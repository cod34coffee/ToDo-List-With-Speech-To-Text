from flask import Flask, jsonify
from flask_cors import CORS
import pyaudio 
import speech_recognition as sr

app = Flask(__name__)
CORS(app)

# Root route
@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to the Speech-to-Text API!"})

@app.route('/speech-to-text', methods=['POST'])
def speech_to_text():
    recognizer = sr.Recognizer()

    try:
        # Capture audio from the user's microphone (or a file)
        with sr.Microphone() as source:
            print("Listening...")
            audio = recognizer.listen(source)

        # Recognize speech using Google Web Speech API
        text = recognizer.recognize_google(audio)
        return jsonify({"speech_text": text})

    except sr.UnknownValueError:
        return jsonify({"error": "Could not understand the audio"}), 400
    except sr.RequestError as e:
        return jsonify({"error": f"Error with speech recognition service: {e}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
