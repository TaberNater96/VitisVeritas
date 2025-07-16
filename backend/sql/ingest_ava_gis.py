import os
import sys
import geopandas
from sqlalchemy import create_engine
from dotenv import load_dotenv
from geoalchemy2 import Geometry
from shapely.geometry import MultiPolygon

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '..', '.env'))
DATABASE_URL = os.getenv('DATABASE_URL')

def force_to_multipolygon(geom):
    """
    Converts a Polygon geometry to a MultiPolygon if necessary.

    Args:
        geom (shapely.geometry.base.BaseGeometry): The input geometry, expected to be a Polygon or MultiPolygon.

    Returns:
        shapely.geometry.MultiPolygon: The geometry as a MultiPolygon.
    """
    if geom.geom_type == 'Polygon':
        return MultiPolygon([geom])
    return geom

def ingest_ava(shapefile_path, ava_name, ava_description=None):
    """
    Reads an AVA shapefile, processes it, and inserts it into the database.

    Args:
        shapefile_path (str): Path to the AVA shapefile (.shp).
        ava_name (str): Name of the AVA to be inserted.
        ava_description (str, optional): Description of the AVA. Defaults to None.
    """
    print(f"--- Starting ingestion for AVA: {ava_name} ---")

    if not DATABASE_URL:
        print("Error: DATABASE_URL not found. Make sure you have a .env file with the correct variable.")
        sys.exit(1)

    # 1. Connect to the database
    try:
        engine = create_engine(DATABASE_URL)
        print("Successfully connected to the database.")
    except Exception as e:
        print(f"Error: Could not connect to the database. {e}")
        return

    # 2. Read the shapefile
    try:
        gdf = geopandas.read_file(shapefile_path)
        print(f"Successfully read shapefile: {shapefile_path}")
    except Exception as e:
        print(f"Error: Could not read the shapefile. Ensure it exists and is valid. {e}")
        return

    # 3. Reproject the data to EPSG:4326 to match the database schema
    print(f"Original CRS: {gdf.crs}")
    gdf = gdf.to_crs('EPSG:4326')
    print(f"Reprojected to CRS: {gdf.crs}")

    # Ensure all geometries are MultiPolygon, this handles shapefiles that contain single Polygons.
    gdf['geometry'] = gdf['geometry'].apply(force_to_multipolygon)

    # 4. Prepare the data for insertion
    final_gdf = geopandas.GeoDataFrame(geometry=gdf.geometry)
    final_gdf['name'] = ava_name
    final_gdf['description'] = ava_description
    final_gdf = final_gdf.rename(columns={'geometry': 'geom'})

    # Manually convert geometry objects to WKT strings.
    final_gdf['geom'] = final_gdf['geom'].apply(lambda x: x.wkt)

    print("Prepared data for insertion (geometry as WKT):")
    print(final_gdf)

    # 5. Insert the GIS data into the database
    try:
        final_gdf.to_sql(
            'avas',
            con=engine,
            if_exists='append',
            index=False,
            dtype={'geom': Geometry('MULTIPOLYGON', srid=4326)}
        )
        print(f"✅ Successfully inserted '{ava_name}' into the 'avas' table.")
    except Exception as e:
        print(f"❌ Error: Could not insert data into the database. {e}")
        print("This might happen if an AVA with the same name already exists (violating UNIQUE constraint).")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python ingest_ava.py <path_to_shapefile.shp> \"<AVA Name>\"")
        sys.exit(1)
    
    shp_path = sys.argv[1]
    name = sys.argv[2]
    
    ingest_ava(shapefile_path=shp_path, ava_name=name)