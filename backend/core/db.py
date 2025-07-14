"""
Database Session Management and Engine Creation.

This module is responsible for setting up the connection to the database. It creates a single SQLAlchemy engine instance using the 
DATABASE_URL from the application's configuration. It also provides a session factory (`SessionLocal`) for creating new database 
sessions and a declarative base (`Base`) for the ORM models to inherit from.
"""
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from .config import settings

# The engine is the starting point for any SQLAlchemy application. It's the 'home base' for the actual database and its DBAPI
engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True # checks for "stale" connections and reconnects if necessary before use
)

# Creates a configured "Session" class, which will serve as a factory for new "Session" objects, flushing and committing will be done once at the end of an API request
SessionLocal = sessionmaker(
    autocommit=False, # prevents automatic committing of CRUD operations to the database, meaning it must be explicitly called during the session
    autoflush=False,  # prevents automatic flushing (pending changes before committing) to the database, meaning it must be called explicitly on the session
    bind=engine       # associates the session with the database engine
)

# Create a base class for declarative class definitions, all of the ORM models (SQLAlchemy schemas) will inherit from this class
Base = declarative_base()