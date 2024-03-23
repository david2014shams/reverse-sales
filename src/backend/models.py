from config import db


class Info(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), unique=False, nullable=False)
    last_name = db.Column(db.String(80), unique=False, nullable=False)
    loan = db.Column(db.Integer, unique=False, nullable=False)
    creditScore = db.Column(db.Integer, unique=False, nullable=False)
    income = db.Column(db.Integer, unique=False, nullable=False)
    loan_term = db.Column(db.Integer, unique=False, nullable=False)
    mortgageApplication = db.Column(db.String, unique=False)


    def to_json(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "loan": self.loan,
            "creditScore": self.creditScore,
            "income": self.income,
            "loan_term": self.loan_term,
            "mortgageApplication": self.mortgageApplication
        }