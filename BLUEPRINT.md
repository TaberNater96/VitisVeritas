VitisVeritas/
├── .gitignore 
├── README.md 
├── backend/
│   ├── app/
│   │   ├── __init__.py           # Makes 'app' a Python package
│   │   ├── api/
│   │   │   ├── __init__.py       # Makes 'api' a Python package
│   │   │   ├── deps.py           # Dependency injection (e.g., get_db_session)
│   │   │   └── v1/
│   │   │       ├── __init__.py   # Makes 'v1' a Python package
│   │   │       ├── api.py        # Main router for the v1 API, includes all endpoint routers
│   │   │       └── endpoints/
│   │   │           ├── __init__.py # Makes 'endpoints' a Python package
│   │   │           ├── recommendations.py # The /recommendations endpoint
│   │   │           ├── terroir.py    # The /terroir endpoint (for map clicks)
│   │   │           └── wineries.py   # The /wineries, /wines, /avas endpoints
│   │   ├── core/
│   │   │   ├── __init__.py       # Makes 'core' a Python package
│   │   │   ├── config.py         # Handles settings & environment variables (uses Pydantic)
│   │   │   └── db.py             # SQLAlchemy engine and session setup
│   │   ├── crud/
│   │   │   ├── __init__.py       # Makes 'crud' a Python package
│   │   │   ├── crud_terroir.py   # Functions to query geospatial data
│   │   │   └── crud_wine.py      # Functions to query wine, winery, ava, etc.
│   │   ├── models/               # Pydantic Schemas (for API data shapes/validation)
│   │   │   ├── __init__.py       # Makes 'models' a Python package
│   │   │   ├── recommendation.py # Pydantic models for recommendation input/output
│   │   │   ├── terroir.py        # Pydantic models for terroir data
│   │   │   └── wine.py           # Pydantic models for Wine, Winery, AVA, etc.
│   │   ├── schemas/              # SQLAlchemy Models (for database table structure)
│   │   │   ├── __init__.py       # Makes 'schemas' a Python package
│   │   │   ├── terroir.py        # SQLAlchemy model for the `terroir_grid` table
│   │   │   └── wine.py           # SQLAlchemy models for `wineries`, `wines`, `avas`, etc.
│   │   ├── services/
│   │   │   ├── __init__.py       # Makes 'services' a Python package
│   │   │   └── recommender/
│   │   │       ├── __init__.py   # Makes 'recommender' a Python package
│   │   │       ├── engine.py     # The core recommendation logic (scoring function)
│   │   │       └── rules.py      # The "knowledge base" mapping tastes to AVAs/varietals
│   │   └── main.py               # Main FastAPI app instance, middleware, and router setup
│   ├── data/                     # For storing data files, not part of the app package
│   │   ├── raw/                  # Raw downloaded data (shapefiles, csvs, DEMs, etc.)
│   │   │   └── avas/
│   │   │       └── willamette_valley.shp
│   │   └── processed/            # Cleaned, processed data ready for DB import
│   │       └── wineries_geocoded_with_ava_ids.csv
│   ├── notebooks/                # Jupyter notebooks for data processing and exploration
│   │   ├── 01-Data-Ingestion-and-Cleaning.ipynb
│   │   └── 02-Geospatial-Processing.ipynb
│   ├── sql/  
│   │   └── dev_schema.sql 
│   ├── tests/                    # Automated tests for API
│   │   ├── __init__.py           # Makes 'tests' a Python package
│   │   ├── conftest.py           # Pytest fixtures (e.g., test database setup, test client)
│   │   ├── api/
│   │   │   ├── __init__.py
│   │   │   └── test_wineries.py  # Example test file for the wineries endpoint
│   │   └── services/
│   │       ├── __init__.py
│   │       └── test_recommender.py # Tests to ensure the rule engine works as expected
│   ├── .env                      # !!! IMPORTANT: For local secrets. DO NOT COMMIT TO GIT.
│   ├── .env.example              # Template for environment variables (safe to commit)
│   ├── alembic.ini               # Alembic (database migration tool) config file
│   ├── Dockerfile                # Recipe to containerize the backend for deployment
│   ├── alembic/                  # Directory for Alembic's generated migration scripts
│   │   ├── env.py
│   │   ├── README
│   │   ├── script.py.mako
│   │   └── versions/             # Where migration scripts like 'xxxx_create_initial_tables.py' live
│   └── requirements.txt          # Python dependencies
│
├──frontend/
|    ├── public/
|    │   ├── index.html            # The single HTML page shell React app loads into
|    │   ├── favicon.ico           # Icon for the browser tab
|    │   ├── logo192.png           # Logos for manifest
|    │   ├── logo512.png
|    │   ├── manifest.json         # PWA (Progressive Web App) metadata
|    │   └── robots.txt            # Instructions for search engine crawlers
|    ├── src/
|    │   ├── api/                  # Functions for calling backend API
|    │   │   └── apiClient.js      # Central place for axios/fetch configuration and instances
|    │   ├── assets/               # Static assets like images, fonts, etc.
|    │   │   ├── images/
|    │   │   │   └── logo.png
|    │   │   └── styles/           # Global and theme-related CSS files
|    │   │       └── global.css
|    │   ├── components/           # Reusable UI components
|    │   │   ├── common/           # Generic components (Buttons, Modals, Spinners)
|    │   │   │   ├── Button.js
|    │   │   │   └── LoadingSpinner.js
|    │   │   ├── layout/           # Components that define page structure
|    │   │   │   ├── Navbar.js
|    │   │   │   ├── Header.js
|    │   │   │   └── Footer.js
|    │   │   ├── map/              # Map-specific components
|    │   │   │   ├── Map.js        # The main Mapbox GL JS component
|    │   │   │   └── TerroirPopup.js # The popup that appears on map click
|    │   │   └── wine/             # Wine-related components
|    │   │       ├── RecommendationList.js # Component to display recommendation results
|    │   │       ├── TasteSelector.js    # The UI for picking taste preferences
|    │   │       ├── WineCard.js         # Component to display a single wine
|    │   │       └── WineDetails.js      # A detailed view/modal for a selected wine
|    │   ├── config/               # Application configuration files
|    │   │   ├── apiConfig.js      # Configuration for backend API (base URLs, endpoints)
|    │   │   └── mapConfig.js      # Configuration for Mapbox (styles, default zoom, etc.)
|    │   ├── hooks/                # Custom React Hooks for reusable logic
|    │   │   ├── useApi.js         # Example: a hook to simplify data fetching and state management
|    │   │   └── useWineries.js    # Example: a hook specifically for fetching winery data
|    │   ├── pages/                # Top-level page components that are mapped to routes
|    │   │   ├── ExplorePage.js    # The main page with the interactive map
|    │   │   ├── HomePage.js
|    │   │   ├── RecommendPage.js  # The page with the recommendation form and results
|    │   │   └── WineDetailPage.js # A page to show detailed information about a specific wine
|    │   ├── utils/                # Utility/helper functions
|    │   │   ├── formatters.js     # Functions for formatting data (e.g., dates, currency)
|    │   │   └── mapUtils.js       # Helper functions for map interactions
|    │   ├── App.js                # Main application component (handles routing)
|    │   ├── App.css               # Top-level styles for App.js
|    │   ├── index.js              # The ultimate entrypoint for the React application
|    │   └── index.css             # Global styles applied at the very root
|    ├── tests/                    # Test files (e.g., using Jest and React Testing Library)
|    │   ├── __mocks__/            # Mocks for external libraries (e.g., API clients)
|    │   │   └── apiClient.js
|    │   ├── components/
|    │   │   ├── map/
|    │   │   │   └── Map.test.js
|    │   │   └── wine/
|    │   │       └── WineCard.test.js
|    │   ├── hooks/
|    │   │   └── useWineries.test.js
|    │   ├── pages/
|    │   │   └── ExplorePage.test.js
|    │   └── setupTests.js         # Test setup and configuration
|    ├── .env.local                # !!! IMPORTANT: For local secrets. DO NOT COMMIT TO GIT.
|    ├── .env.example              # Template for frontend environment variables (safe to commit)
|    ├── package.json              # JS dependencies and scripts (e.g., "start", "build")
|    ├── package-lock.json         # Exact versions of JS dependencies
└── venv/
    ├── bin/
    ├── include/
    ├── lib/
    ├── lib64/
    ├── .gitignore
    ├── pyvenv.cfg