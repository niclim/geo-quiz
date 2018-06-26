from flask import Blueprint

bp = Blueprint('questions', __name__, url_prefix='/api/questions')


@bp.route('/<int:quiz_id>/<int:q_id>')
def question(quiz_id, q_id):
    pass


@bp.route('/answer/<int:quiz_id>/<q_id>')
def answer(quiz_id, q_id):
    pass


@bp.route('/validate/quiz_id', methods=('POST'))
def validate(quiz_id):
    pass
