VitisVeritas/
├── .github/
│   └── workflows/
│       └── deploy-gh-pages.yml      # GitHub Action for automatic deployment
│
├── backend/
│   ├── .env                         # Securely holds your local DATABASE_URL
|   ├── notebooks/
│   ├── raw_data/                    # Source data (shapefiles, etc.)
│   │   └── avas/
|   ├── sql/
|   │   ├── ingest_avas.py
|   │   ├── generate_terroir_grid.py
|   │   └── generate_static_json.py   # The final script that outputs data for the frontend by converting database data to json data
|   ├── venv/
│
└── frontend/
    ├── public/
    │   ├── data/
    │   │   ├── avas_summary.json      # Lightweight data for the AVAs page (name, description, image path)
    │   │   ├── avas_geo.geojson       # Full geometry for the map
    │   │   ├── wineries.geojson       # Winery locations and details
    │   │   ├── varietals.json         # Data for the Wines page
    │   │   └── terroir_grid.json      # The heaviest file, loaded last
    │   └── favicon.ico
    │
    ├── src/
    │   ├── assets/
    │   │   ├── images/
    │   │   │   ├── hero-background.jpg  # The vineyard background image
    │   │   │   ├── greek-art-1.png      # Decorative art
    │   │   │   └── ava_screenshots/
    │   │   │       ├── dundee_hills.jpg
    │   │   │       └── eola_amity_hills.jpg
    │   │   └── styles/
    │   │       ├── main.css             # Global styles, fonts, color variables
    │   │       └── components.css       # Styles specific to individual components
    │   │
    │   ├── components/                  # Reusable UI building blocks
    │   │   ├── common/
    │   │   │   ├── Header.jsx
    │   │   │   ├── Footer.jsx
    │   │   │   └── LoadingSpinner.jsx
    │   │   ├── map/
    │   │   │   ├── MapCanvas.jsx        # The core map component
    │   │   │   └── MapControlPanel.jsx  # The sidebar with toggles and legends
    │   │   └── ui/
    │   │       ├── HeroSection.jsx
    │   │       ├── InfoCard.jsx
    │   │       └── SommelierWidget.jsx
    │   │
    │   ├── hooks/                       # Custom React hooks for shared logic
    │   │   └── useDataCache.js          # A custom hook to handle fetching and caching
    │   │
    │   ├── pages/                       # Each file represents a full page view
    │   │   ├── HomePage.jsx
    │   │   ├── AVAsPage.jsx
    │   │   ├── SciencePage.jsx
    │   │   ├── WinesPage.jsx
    │   │   └── ExperiencePage.jsx
    │   │
    │   ├── services/                    # Logic for external interactions
    │   │   ├── dataService.js           # Functions to fetch the local JSON files
    │   │   └── sommelierService.js      # The recommendation algorithm logic
    │   │
    │   ├── App.jsx                      # Main app component, handles routing
    │   └── main.jsx                     # Entry point of the React application
    │
    ├── .gitignore
    ├── index.html
    ├── package.json
    └── vite.config.js