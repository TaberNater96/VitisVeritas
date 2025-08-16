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

CREATE TABLE soils (
    mukey TEXT,
    musym TEXT,
    muname TEXT,
    geom GEOMETRY(MultiPolygon, 4326)
);

CREATE INDEX idx_soils_geom ON soils USING GIST (geom);