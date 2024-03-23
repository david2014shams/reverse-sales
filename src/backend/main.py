from flask import request, jsonify
from config import app, db
from models import Info


@app.route("/info", methods=["GET"])
def get_info():
    info = Info.query.all()
    return jsonify([i.to_json() for i in info])

app.route("/post-info", methods=["POST"])
def add_info():
    data = request.get_json()
    new_info = Info(
        first_name=data["first_name"],
        last_name=data["last_name"],
        loan=data["loan"],
        creditScore=data["creditScore"],
        income=data["income"],
        loan_term=data["loan_term"],
        mortgageApplication=data["mortgageApplication"]
    )
    db.session.add(new_info)
    db.session.commit()
    return jsonify(new_info.to_json()), 201