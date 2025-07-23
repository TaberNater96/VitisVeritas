# Vitis Veritas - The Truth Of Wine

> "In vino veritas." — *In wine, there is truth.*

---

## About The Project

**Vitis Veritas** is a web-based, interactive guide to the Willamette Valley wine region, built for enthusiasts, students, and connoisseurs alike. This project moves beyond simple winery listings to create a deeply educational experience centered on the concept of *terroir*—the unique environmental factors that shape the character of a wine.

By weaving together a rich, interactive map with detailed content pages, Vitis Veritas allows users to explore the intricate relationship between the land and the wine. It visualizes key geospatial data—such as elevation, soil type, slope, and aspect—to reveal *why* certain areas are prized for viticulture and how these elements influence the final product in your glass.

This application is built as a high-performance, content-first static site, demonstrating a modern frontend architecture that is both completely free to host and incredibly fast for the end-user.

### Key Features

*   **Content-Rich Experience:** A beautiful landing page that tells the story of the region before diving into the data.
*   **Detailed Educational Pages:** Dedicated sections explaining the science of terroir, detailed descriptions of each American Viticultural Area (AVA), and a guide to the primary wine varietals of the Willamette Valley.
*   **Interactive Terroir Map:** A sophisticated map, loaded "below the fold" for performance, featuring toggleable layers for AVAs, wineries, and powerful terroir visualizations.
*   **The Sommelier:** An intelligent recommendation widget that suggests wines based on user-selected flavor profiles.
*   **Performant by Design:** Built as a static site that leverages browser caching and strategic data loading to ensure a fast and smooth user experience.

---

## Technology Stack

This project utilizes a modern technology stack, with a clear separation between the local data processing pipeline and the public-facing frontend application.

| Area                  | Technologies                                                                 |
| --------------------- | ---------------------------------------------------------------------------- |
| **Frontend**          | `React` `Vite` `JavaScript (ES6+)` `Mapbox GL JS` `HTML5` `CSS3`               |
| **Data Pipeline**     | `Python` `PostgreSQL` / `PostGIS` `GeoPandas` `SQLAlchemy` `Pandas`            |
| **Deployment & CI/CD**| `GitHub Pages` `GitHub Actions`                                              |

---

## Getting Started

To run this project locally, you will need Node.js, Python, and a running PostgreSQL instance with the PostGIS extension enabled.

### 1. Clone the Repository

```bash
git clone https://github.com/TaberNater96/vitis-veritas-project.git
cd vitis-veritas-project
```

### 2. Set Up the Data Pipeline (Backend)

This only needs to be done once to populate your local database.

```bash
# Navigate to the backend directory
cd backend

# Create and activate a Python virtual environment
python -m venv .venv
source .venv/bin/activate  # On Windows, use: .venv\Scripts\activate

# Install Python dependencies
pip install -r requirements.txt # (You will need to create this file)

# Create the .env file for your database connection
# Copy the contents of .env.example (or create it) and add your credentials
cp .env.example .env
# nano .env

# Run the ingestion scripts to populate your local database
python 00_ingest_avas.py
# ...and so on for other data scripts
```

### 3. Set Up the Application (Frontend)

```bash
# Navigate to the frontend directory
cd frontend

# Install Node.js dependencies
npm install

# Run the final data generation script from the backend
# This creates the JSON files the frontend needs to start
cd ../backend
python 99_generate_static_json.py

# Go back to the frontend and start the development server
cd ../frontend
npm run dev
```

Your application should now be running on `http://localhost:5173`.

---

## Data Update Workflow

The core architecture of this project relies on a simple yet powerful workflow for updating the site's data.

1.  **Update Local Database:** Make any desired changes to your local PostgreSQL database (e.g., add a new winery, update a description).
2.  **Regenerate Static Data:** Run the master script from the `backend` directory. This script queries your database and exports the data into the required JSON/GeoJSON files, placing them in `frontend/public/data/`.
    ```bash
    python backend/99_generate_static_json.py
    ```
3.  **Commit and Push:** Add the *changed JSON files* to a new Git commit and push it to the `main` branch.
    ```bash
    git add frontend/public/data/
    git commit -m "docs: Update winery and AVA data"
    git push origin main
    ```
4.  **Automatic Deployment:** The GitHub Action defined in `.github/workflows/` will automatically detect the push, rebuild the React application with the new data, and deploy the result to GitHub Pages. The live site will be updated within minutes.

---

## Author

*   **TaberNater96** - [GitHub Profile](https://github.com/TaberNater96)

*Project maintained as of: 2025-07-22*

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
psql -U "TaberNater96" -h localhost -d vitis_veritas
```

## Basic PostgreSQL CLI Commands

```sql
-- List all databases
\l

-- Connect to a specific database
\c vitis_veritas

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

## Front-End Setup

```sh
# This command uses Vite to create a new React project in a 'frontend' folder
npm create vite@latest frontend -- --template react
cd frontend
npm install

# For routing between pages
npm install react-router-dom

# For the interactive map
npm install mapbox-gl

# For detecting when a component is visible on screen (for lazy loading)
npm install react-intersection-observer

# Run the vite server to see live code in browser
cd frontend
npm run dev
```