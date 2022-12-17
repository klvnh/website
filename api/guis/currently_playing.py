import spotipy
import spotipy.util as util
import os
from pprint import pprint

username = "klv"
scope = "user-read-currently-playing"
CLIENT_ID = os.environ.get('CLIENT_ID')
CLIENT_SECRET = os.environ.get('CLIENT_SECRET')
redirect_uri = "https://kvtt.ml/callback"
token = util.prompt_for_user_token(username, scope, CLIENT_ID, CLIENT_SECRET, redirect_uri)
sp = spotipy.Spotify(auth=token)

def currently_playing():
    song_data = sp.currently_playing()
    return song_data['item']['album']['artists'][0]['external_urls']['spotify']