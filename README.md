vitis-veritas-project/
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   ├── deps.py             # Dependency injection (e.g., get_db_session)
│   │   │   └── v1/
│   │   │       ├── __init__.py
│   │   │       ├── endpoints/
│   │   │       │   ├── recommendations.py # The /recommend endpoint
│   │   │       │   ├── terroir.py         # The /terroir endpoint (for map clicks)
│   │   │       │   └── wineries.py        # The /wineries, /wines endpoints
│   │   │       └── api.py                 # Main router for the v1 API
│   │   ├── core/
│   │   │   ├── __init__.py
│   │   │   ├── config.py           # Handles settings & environment variables (uses Pydantic)
│   │   │   └── db.py               # SQLAlchemy engine and session setup
│   │   ├── crud/                   # (Create, Read, Update, Delete) - Database logic
│   │   │   ├── __init__.py
│   │   │   ├── crud_terroir.py     # Functions to query geospatial data
│   │   │   └── crud_wine.py        # Functions to query wine/winery data
│   │   ├── models/                 # Pydantic Schemas (for API data shapes)
│   │   │   ├── __init__.py
│   │   │   ├── recommendation.py   # Models for recommendation input/output
│   │   │   ├── terroir.py          # Models for terroir data
│   │   │   └── wine.py             # Models for Wine, Winery, AVA
│   │   ├── schemas/                # SQLAlchemy Models (for database table structure)
│   │   │   ├── __init__.py
│   │   │   ├── terroir.py          # SQLAlchemy model for the `terroir_data` table
│   │   │   └── wine.py             # SQLAlchemy models for `wineries`, `wines`, etc.
│   │   ├── services/               # Business logic not directly related to CRUD
│   │   │   ├── __init__.py
│   │   │   └── ml_service.py       # Logic to load and use the ML model
│   │   └── main.py                 # Main FastAPI app instance and router setup
│   ├── data/
│   │   ├── raw/                    # Raw downloaded data (shapefiles, csvs, etc.)
│   │   │   └── avas/
│   │   │       └── willamette_valley.shp
│   │   └── processed/              # Cleaned, processed data ready for DB import
│   │       └── wineries_geocoded.csv
│   ├── ml/
│   │   ├── models/
│   │   │   ├── wine_recommender_v1.pkl # The actual saved/pickled model file
│   │   │   └── wine_tfidf_vectorizer_v1.pkl # The saved text vectorizer
│   │   └── notebooks/
│   │       ├── 01-Data-Ingestion-and-Cleaning.ipynb
│   │       ├── 02-Geospatial-Processing.ipynb
│   │       └── 03-Recommendation-Model-Training.ipynb
│   ├── tests/                      # Automated tests for your API
│   │   ├── __init__.py
│   │   ├── conftest.py             # Pytest fixtures (e.g., test database setup)
│   │   └── api/
│   │       └── test_wineries.py    # Example test file for the wineries endpoint
│   ├── .env                        # !!! IMPORTANT: For local environment variables. DO NOT COMMIT TO GIT.
│   ├── .gitignore
│   ├── alembic.ini                 # Alembic (database migration tool) config
│   ├── Dockerfile                  # Recipe to containerize the backend for deployment
│   ├── alembic/                    # Directory for Alembic migration scripts
│   └── requirements.txt            # Python dependencies
│
└── frontend/
    ├── public/
    │   ├── index.html              # The single HTML page your React app loads into
    │   └── favicon.ico
    ├── src/
    │   ├── api/                    # Functions for calling your backend API
    │   │   └── apiClient.js        # Central place for axios/fetch configuration
    │   ├── assets/                 # Images, fonts, etc.
    │   │   └── images/
    │   │       └── logo.png
    │   ├── components/             # Reusable UI components
    │   │   ├── common/             # Buttons, Modals, Spinners
    │   │   │   └── LoadingSpinner.js
    │   │   ├── map/                # Map-specific components
    │   │   │   ├── Map.js          # The main Mapbox component
    │   │   │   └── TerroirPopup.js # The popup that appears on map click
    │   │   └── wine/
    │   │       ├── WineCard.js     # Component to display a single wine
    │   │       └── WineList.js     # Component to display a list of WineCards
    │   ├── hooks/                  # Custom React Hooks (e.g., for data fetching)
    │   │   └── useWineries.js
    │   ├── pages/                  # Top-level page components
    │   │   ├── ExplorePage.js      # The main page with the interactive map
    │   │   ├── HomePage.js
    │   │   └── RecommendPage.js    # The page with the recommendation form
    │   ├── services/               # Logic for state management, etc. (Can be part of `api`)
    │   ├── styles/                 # Global CSS, themes, etc.
    │   │   └── global.css
    │   ├── App.js                  # Main application component (routing)
    │   ├── App.css
    │   └── index.js                # Entrypoint for the React application
    ├── .gitignore
    ├── package.json                # JS dependencies and scripts (e.g., "start", "build")
    └── README.md

## Running PostgreSQL/PostGIS in WSL

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

-- List all extensions
\dx

-- Show current database and user
SELECT current_database(), current_user;

-- Exit PostgreSQL
\q
```