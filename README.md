vitis-veritas-project/
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   ├── deps.py
│   │   │   └── v1/
│   │   │       ├── endpoints/
│   │   │       │   ├── recommendations.py # <-- This endpoint's logic will now call the rule engine
│   │   │       │   ├── terroir.py
│   │   │       │   └── wineries.py
│   │   │       └── api.py
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   └── db.py
│   │   ├── crud/
│   │   │   ├── crud_terroir.py
│   │   │   └── crud_wine.py
│   │   ├── models/
│   │   │   ├── recommendation.py   # <-- Pydantic models for the rule engine's input/output
│   │   │   ├── terroir.py
│   │   │   └── wine.py
│   │   ├── schemas/
│   │   │   ├── terroir.py
│   │   │   └── wine.py
│   │   ├── services/
│   │   │   └── recommender/
│   │   │       ├── __init__.py
│   │   │       ├── engine.py       # <-- The core recommendation logic (scoring, rules) lives here
│   │   │       └── rules.py        # <-- Defines the relationships (e.g., Dundee Hills -> Earthy)
│   │   └── main.py
│   ├── data/
│   │   ├── raw/
│   │   └── processed/
│   ├── notebooks/ 
│   │   ├── 01-ETL.ipynb
│   │   └── 02-Geospatial-Processing.ipynb
│   ├── tests/
│   │   ├── conftest.py
│   │   └── services/
│   │       └── test_recommender.py 
│   ├── .env
│   ├── .gitignore
│   ├── alembic.ini
│   ├── Dockerfile
│   ├── alembic/
│   └── requirements.txt
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