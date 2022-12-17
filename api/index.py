from flask import Flask, render_template
from api.guis.currently_playing import currently_playing

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', currently_playing=currently_playing())

app.run(host='0.0.0.0')