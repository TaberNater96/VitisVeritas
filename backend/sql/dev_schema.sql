/*
Development Database Schema

Created: 7/13/2025
Environment: PostgreSQL/PostGIS 
OS: WSL 2
*/

CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE varietals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    description TEXT
);

CREATE TABLE soils (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    parent_material VARCHAR(255) -- e.g., Volcanic, Marine Sediment
);

CREATE TABLE avas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    geom GEOMETRY(MultiPolygon, 4326) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_avas_geom ON avas USING GIST (geom);

CREATE TABLE wineries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT,
    website_url VARCHAR(255),
    description TEXT,
    location GEOMETRY(Point, 4326),
    ava_id INTEGER REFERENCES avas(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    phone VARCHAR(20)
);
CREATE INDEX idx_wineries_location ON wineries USING GIST (location);
CREATE INDEX idx_wineries_ava_id ON wineries (ava_id);

-- Pre-calculated terroir grid data
CREATE TABLE terroir_grid (
    id SERIAL PRIMARY KEY,
    geom GEOMETRY(Point, 4326) NOT NULL,
    elevation_meters INTEGER,
    slope_degrees REAL,
    aspect_degrees REAL,
    avg_gdd_apr_oct REAL,
    avg_insolation_kwh_m2 REAL,
    soil_id INTEGER REFERENCES soils(id) ON DELETE SET NULL -- set FK on soils table, if id in soils table is deleted, set all rows with that id to NULL
);
CREATE INDEX idx_terroir_grid_geom ON terroir_grid USING GIST (geom);
CREATE INDEX idx_terroir_grid_soil_id ON terroir_grid (soil_id);