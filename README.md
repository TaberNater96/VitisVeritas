# Vitis Veritas: Willamette Valley Terroir Explorer

Vitis Veritas is a web application designed to explore the unique terroir of the Willamette Valley wine region. It provides an interactive map to visualize scientific data about the land (elevation, soil, slope) and a recommendation engine to help users discover wines based on taste profiles. As well as detailed, scientific documentation for the wines of this region.

## Tech Stack

- **Backend:** FastAPI (Python), PostgreSQL with PostGIS, SQLAlchemy, Alembic
- **Frontend:** React, Mapbox GL JS, Axios
- **Deployment:** AWS (EC2)
- **Development Environment:** WSL (Ubuntu)

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