from flask import Flask, render_template
import spotipy
import spotipy.util as util
import os

username = "klv"
scope = "user-read-currently-playing"
CLIENT_ID = os.environ.get('CLIENT_ID')
CLIENT_SECRET = os.environ.get('CLIENT_SECRET')
redirect_uri = "https://kvtt.ml/callback"
token = util.prompt_for_user_token(username, scope, CLIENT_ID, CLIENT_SECRET, redirect_uri)
sp = spotipy.Spotify(auth=token)
app = Flask(__name__)

def currently_playing():
    song_data = sp.currently_playing()
    try: 
        song_url = "https://open.spotify.com/embed/track/" + song_data['item']['id'] + "?utm_source=generator"
        return song_url
    except:
        return None

@app.route('/')
def home():
    if currently_playing() is None:
        return "<body style=background-color:#2a2a2a;> No current playing song </body>"
    else:
        return render_template('home.html', currently_playing=currently_playing())