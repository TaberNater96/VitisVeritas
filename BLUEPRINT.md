**Rough draft of project outline and subject to change as the project evolves**

VitisVeritas/
├── .github/
│   └── workflows/
│       └── deploy-gh-pages.yml      # GitHub Action for automatic deployment
│
├── backend/
│   ├── .env
|   ├── notebooks/
│   │   └── ETL.ipynb
│   ├── data/                         # Source data (shapefiles, etc.)
|   ├── sql/
|   │   ├── ingest_avas.py            # Should only need to be run once
|   │   └── generate_static_json.py   # The final script that outputs data for the frontend by converting database data to json data
|   ├── venv/
│
└── frontend/
    ├── public/
    │   ├── data/
    │   │   ├── avas_summary.json      # Lightweight data for the AVAs page (name, description, image path)
    │   │   ├── avas.geojson       # Full geometry for the map
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
    │   │       ├── base.css
    │   │       ├── normalize.css
    │   │       └── variables.css
    │   │
    │   ├── components/                  # Reusable UI building blocks
    │   │   ├── common/
    │   │   │   ├── Header.jsx
    │   │   │   ├── Header.css
    │   │   │   ├── Footer.jsx
    │   │   │   ├── Footer.csss
    │   │   │   ├── LoadingSpinner.jsx
    │   │   │   └── LoadingSpinner.css
    │   │   ├── map/
    │   │   │   ├── MapCanvas.jsx        # The core map component
    │   │   │   └── MapControlPanel.jsx  # The sidebar with toggles and legends
    │   │   └── ui/
    │   │       ├── Hero.jsx
    │   │       ├── Hero.css
    │   │       ├── InfoCard.jsx
    │   │       └── SommelierWidget.jsx
    │   │
    │   ├── hooks/                       # Custom React hooks for shared logic
    │   │   ├── useIntersectionObserver.js
    │   │   └── useDataCache.js
    │   │
    │   ├── pages/                       # Each file represents a full page view
    │   │   ├── HomePage.jsx
    │   │   ├── AVAsPage.jsx
    │   │   ├── SciencePage.jsx
    │   │   ├── WinePage.jsx
    │   │   ├── TheAlchemyOfTheVinePage.jsx 
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