from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    """
    Configuration settings for the application using Pydantic BaseSettings.

    This class handles environment variable loading and validation for the application's configuration. It automatically reads from a 
    .env file located in the backend directory and provides type validation for configuration parameters.

    Attributes:
        DATABASE_URL (str): The database connection URL string used to connect to the application's database.

    Configuration:
        - Loads environment variables from 'backend/.env' file
        - Uses UTF-8 encoding for the environment file
        - Inherits validation and parsing capabilities from Pydantic BaseSettings
    """
    DATABASE_URL: str

    class Config:
        # Since the app is run from the `backend` directory, it will find `backend/.env`
        env_file = ".env"
        env_file_encoding = 'utf-8'

# Creates a single, importable instance of the settings
settings = Settings()