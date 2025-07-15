# Vitis Veritas: A Scientific Analysis Platform for Willamette Valley Terroir

*   **Author:** @TaberNater96
*   **Last Updated:** 2025-07-14 04:05:09 UTC
*   **Project Status:** In Development

---

## 1. Project Mission & Overview

Vitis Veritas is a data-intensive web platform dedicated to providing a **detailed scientific analysis of the Willamette Valley's wine terroir**. It uniquely connects geological and climatological data directly to individual wines, offering users unparalleled insight into how the land (`terroir`) shapes the final product in the bottle.

This is not merely a map of wineries. It is an analytical tool that presents a comprehensive scientific report for any geographical point in the region. The interactive map and recommendation engine are the primary interfaces for discovering and delivering these data-driven insights.

### Core Pillars

1.  **Scientific Terroir Reporting:** The application's primary function is to generate a comprehensive, on-demand scientific report for any point within the Willamette Valley. This report synthesizes key viticultural metrics including:
    *   Elevation
    *   Soil Type and Parent Material
    *   Slope (Gradient)
    *   Aspect (Directional Facing)
    *   Growing Degree Days (GDD)
    *   Average Solar Insolation (Sunlight Energy)

2.  **Interactive Geospatial Platform:** A high-performance map interface serves as the primary tool for geospatial analysis. It allows users to visually explore the boundaries of American Viticultural Areas (AVAs) and see how wineries and vineyards are situated within the complex topographical landscape.

3.  **Terroir-Driven Recommendation Engine:** A unique "expert system" that recommends wines not just on generic taste profiles, but by correlating user preferences with the scientific terroir data of specific AVAs and the known characteristics of varietals grown there. It answers the question: "If I like wines with 'earthy and mineral' notes, which specific regions' soil and climate produce that?"

---

## 2. Tech Stack

| Category      | Technology                                                              |
| :------------ | :---------------------------------------------------------------------- |
| **Backend**   | FastAPI (Python), Uvicorn                                               |
| **Frontend**  | React, Mapbox GL JS, Axios                                              |
| **Database**  | PostgreSQL with PostGIS extension                                       |
| **ORM/Data**  | SQLAlchemy, GeoAlchemy2, Pydantic, Alembic (for database migrations)    |
| **Dev Env**   | Windows Subsystem for Linux (WSL 2 - Ubuntu)                            |
| **Deployment**| Docker, AWS (App Runner for Backend, Amplify for Frontend, RDS for DB)  |

---

## 3. The Development Pipeline: From Data to Insight

This project follows a logical, phased development pipeline. Each phase builds upon the last, ensuring a stable and organized workflow from a blank folder to a deployed analytical platform.

### Phase 0: Prerequisites & Initial Setup

*   **Environment:** All development is performed within WSL (Ubuntu) to mirror the production Linux environment.
*   **Tools:** Install `python3-venv`, `nodejs`, `npm`, `postgresql`, and `postgis` within WSL.
*   **Database:** Initialize a local PostgreSQL instance, create the `vitis_veritas_dev` database, and enable the PostGIS extension (`CREATE EXTENSION postgis;`).
*   **Schema:** Manually run the final schema SQL script (`sql/vitis_veritas_schema_v2.sql`) once to create all tables and indexes. This provides the database structure for the application to interact with.
*   **Version Control:** Initialize a Git repository in the project root and create the master `.gitignore` file.

### Phase 1: Backend Scaffolding & Configuration

*   **Goal:** Establish a runnable "Hello World" FastAPI application that successfully connects to the database.
*   **Steps:**
    1.  **Create Directory Structure:** Build the complete `backend/` directory tree, including all `app/` subdirectories and empty `__init__.py` files to define the Python packages.
    2.  **Define Dependencies:** Populate `backend/requirements.txt` with all necessary Python libraries.
    3.  **Configure Environment:** Create `.env` and `.env.example` to manage the `DATABASE_URL` connection string.
    4.  **Establish DB Connection:** Implement `app/core/config.py` to read environment variables and `app/core/db.py` to create the reusable SQLAlchemy engine.
    5.  **Launch "Hello World":** Create a minimal FastAPI app in `app/main.py` and run `uvicorn` to verify the server starts correctly.

### Phase 2: Data Layer & Ingestion

*   **Goal:** Define the Python representations of our data and populate the database with the scientific and viticultural information that forms the core of the application.
*   **Steps:**
    1.  **SQLAlchemy Models (`schemas/`):** Create the Python classes that map to our PostgreSQL tables. This is the ORM layer that Alembic will use for migrations.
    2.  **Pydantic Models (`models/`):** Create the data-shape classes for our API. This provides data validation and serialization.
    3.  **Data Processing (`notebooks/`):** Use Jupyter notebooks to perform the heavy lifting of data engineering: download raw data (shapefiles, CSVs, Digital Elevation Models), clean it, process it (e.g., geocode addresses, calculate slope from DEMs), and save cleaned files to `data/processed/`.
    4.  **Database Population:** Write a one-time script that uses our SQLAlchemy models to read the processed files and insert the data into the `vitis_veritas_dev` database.

### Phase 3: Backend API Development

*   **Goal:** Build the API endpoints that will serve the synthesized scientific data to the frontend.
*   **Steps:**
    1.  **CRUD Layer (`crud/`):** Create functions that handle the direct database interactions (e.g., `get_winery_by_id`, `get_terroir_at_point`). This separates business logic from database logic.
    2.  **API Endpoints (`api/v1/endpoints/`):** Build the FastAPI routers and path operations (e.g., `@router.get("/report/terroir")`) that call the CRUD functions.
    3.  **Router Aggregation:** Combine all endpoint routers in `api/v1/api.py` and include this main router in `app/main.py`.
    4.  **Verification:** Use the auto-generated Swagger UI at `http://localhost:8000/docs` to test each endpoint interactively.

### Phase 4: Frontend Development & Scientific Reporting

*   **Goal:** Build the user-facing geospatial platform and implement the dynamic scientific reporting feature.
*   **Steps:**
    1.  **React Setup:** Initialize the React application in the `frontend/` directory and install dependencies (`axios`, `mapbox-gl`).
    2.  **API Client:** Create a centralized `apiClient.js` configured with the backend's base URL (`http://localhost:8000`).
    3.  **Component Scaffolding:** Build the component tree, starting with the main `Map.js` component.
    4.  **Data Fetching & Display:** In the main page component, use the `apiClient` to fetch winery data and pass it to the `Map.js` component, which renders the markers.
    5.  **Implement Scientific Reporting:** Add a map-click handler that calls the `/report/terroir` backend endpoint and displays the full, synthesized scientific report in a clean, readable popup or side-panel component.

### Phase 5: Terroir-Driven Recommendation Engine

*   **Goal:** Connect the scientific terroir data to the wine database by building a terroir-aware recommendation engine.
*   **Steps:**
    1.  **Knowledge Base (`services/recommender/rules.py`):** Define the "expert" rules as Python dictionaries, mapping taste profiles to the scientifically-defined characteristics of AVAs and varietals.
    2.  **Scoring Engine (`services/recommender/engine.py`):** Write the core function that takes user preferences, queries all wines, and applies the terroir rules to calculate a recommendation score.
    3.  **Recommendation Endpoint (`api/v1/endpoints/recommendations.py`):** Expose the scoring engine via a new API endpoint.
    4.  **Frontend UI:** Build the React components to allow users to select their preferences and display the list of recommended wines, with explanations linking back to the terroir.

### Phase 6: Finalization & Deployment

*   **Goal:** Prepare the application for production and deploy it to the cloud.
*   **Steps:**
    1.  **Automated Testing (`tests/`):** Write unit and integration tests for critical backend logic.
    2.  **Containerization (`Dockerfile`):** Create a Dockerfile to package the entire backend application.
    3.  **Cloud Deployment (AWS):**
        *   Provision a managed **PostgreSQL RDS** instance with the PostGIS extension.
        *   Migrate and populate the production database.
        *   Deploy the backend Docker container to **AWS App Runner**.
        *   Deploy the static frontend assets to **AWS Amplify**.
        *   Configure the Amplify app with the public URL of the App Runner service.

---

## 4. How to Run Locally

### Backend

1.  Navigate to the backend directory: `cd backend`
2.  Create and activate a Python virtual environment: `python3 -m venv venv && source venv/bin/activate`
3.  Install dependencies: `pip install -r requirements.txt`
4.  Copy `.env.example` to `.env` and fill in your local database URL.
5.  Start the server: `uvicorn app.main:app --reload`
    *   *Server will be running at `http://localhost:8000`*
    *   *API Docs at `http://localhost:8000/docs`*

### Frontend

1.  In a **new terminal**, navigate to the frontend directory: `cd frontend`
2.  Install dependencies: `npm install`
3.  Start the development server: `npm start`
    *   *The application will open and run at `http://localhost:3000`*

## Running PostgreSQL/PostGIS in WSL (port 5432)

```bash
# Start PostgreSQL service
sudo service postgresql start

# Check if it's running
sudo service postgresql status

# (Optional) Make it start automatically on boot
sudo systemctl enable postgresql

# Connect to PostgreSQL
psql -U "TaberNater96" -h localhost -d postgres

# Or connect directly to vitis_vertitas_dev database
psql -U "TaberNater96" -h localhost -d vitis_vertitas_dev
```

## Basic PostgreSQL CLI Commands

```sql
-- List all databases
\l

-- Connect to a specific database
\c vitis_vertitas_dev

-- List all tables in current database
\dt

-- List all tables with more details
\dt+

-- Describe a specific table structure
\d table_name

-- List all indexes
\di

-- List all extensions
\dx

-- Show current database and user
SELECT current_database(), current_user;

-- Exit PostgreSQL
\q

-- Execute SQL script (connect to DB first)
\i script.sql
```

## Python Virtual Environment

```bash
# Activate the python virtual environment
source venv/bin/activate

# Deactivate the python virtual environment
deactivate

# See the list of installed packages in this environmen
pip list
```

## WSL

```bash
# Move a file from Windows to WSL (this is an example from downloads to project folder)
mv /mnt/c/Users/boxca/Downloads/file_name_here /home/tabernater/projects/VitisVeritas
```