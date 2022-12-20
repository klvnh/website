from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/favorite')
def favorite():
    return render_template("favorite.html")

app.run(host="0.0.0.0")