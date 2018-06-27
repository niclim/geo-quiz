import os
from flask import Flask, render_template
from geoquiz_server import questions

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)

    register_blueprints(app)
    register_catch_all(app)
    return app

def register_blueprints(app):
    app.register_blueprint(questions.views.bp)

def register_catch_all(app):
    # Serve react as catch all (in a production env)
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def index(path):
        return render_template('index.html')
