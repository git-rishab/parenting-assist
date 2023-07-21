from flask import Flask, request, jsonify
import os
import openai
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from routes.AI import (
    upload,
    train,
    tune_list,
    training_detail,
    test,
    audio
)

app = Flask(__name__)
CORS(app)

@app.route('/')
def welcome():
    return jsonify({'message':'Welcome to parent-guide', 'ok':True})

limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["200 per day", "50 per hour"],
    storage_uri="memory://",
)

app.route('/upload', methods=["GET"])(upload)
app.route('/train', methods=['GET'])(train)
app.route('/list', methods=['GET'])(tune_list)
app.route('/detail', methods=['GET'])(training_detail)
app.route('/test', methods=['POST'])(test)
app.route('/audio', methods=['POST'])(audio)

@app.route("/chat", methods=["POST"])
@limiter.limit("10 per 5 minute", error_message='Rate limit exceeded')
def chat():
    message = request.json["prompt"]
    api_key = os.getenv("OPENAI_API_KEY")
    past_messages = request.json['past_message']
    prompt = [
        {
            "role": "system",
            "content": os.getenv('PROMPT'),
        }
    ]
    if len(past_messages) >= 1 :
        for message in past_messages:
            prompt.append(message)
            
    
    prompt.append({"role": "user", "content": f"Question: {message}. ### You need to ask the clarification question regarding the given question for clear clarification and creative answers, also first just ask the clarification question and if something is not properly mentioned in the question asked by the user and after getting the solution of the clarification question only then answer should be given based on this, also try to give emotional, heart to heart felt answers in around 100 words only. if you are asking clarification question try to keep the response as short as possible ###"})

    try:
        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=prompt,
            api_key=api_key,
        )
        response = completion.choices[0].message.content
        return jsonify({"ok": True, "message": response})
    except Exception as e:
        return jsonify({"ok": False, "error": str(e)}), 500


if __name__ == '__main__':
    app.run()