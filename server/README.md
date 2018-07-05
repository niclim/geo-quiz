# geo-quiz-server

## Running the server

Set up a virtual environment or set up using auto env
```
python3 -m venv venv

// activate the venv
. venv/bin/activate

// autoenv
pip install autoenv==1.0.0
touch .env
```

Set the flask environment variables (in the .env for autoenv)
```
source venv/bin/activate
export APP_SETTINGS="config.DevelopmentConfig"
export FLASK_APP=run.py
export FLASK_ENV=development
```

install dependencies
```
pip install -r requirements.txt
```

Then run the application

```
flask run
```

## Todo
- Set up a config file
- Add a db
- Add question routes
- Migrate questions to db
- Add login/auth routes and users
