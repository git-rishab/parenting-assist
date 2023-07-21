from flask import request, jsonify
from bardapi import Bard
import os
import openai

def upload():
    openai.api_key = os.getenv('OPENAI_API_KEY')
    res = openai.File.create (
        file=open("./resources/training-data.jsonl", "rb"),
        purpose='fine-tune'
    )
    return jsonify({"response":res})

def train():
    openai.api_key = os.getenv('OPENAI_API_KEY')
    res = openai.FineTune.create(training_file="file-KvUBudpgu4z7iDNV6DLI4cnr")
    return jsonify({"response":res})

def training_detail():
    openai.api_key = os.getenv('OPENAI_API_KEY')
    response = openai.FineTune.retrieve(id="ft-RkV6Hro7MA0BQ85dKUkLBXIn")
    return jsonify({"List":response})

def tune_list():
    openai.api_key = os.getenv('OPENAI_API_KEY')
    response = openai.FineTune.list()
    return jsonify({"List":response})

def test():
    prompt = request.json['prompt']
    # Set your API key here
    openai.api_key = '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'

    response = openai.Completion.create(
        model="davinci:ft-personal:sdata-2023-07-20-23-03-28",  # Replace with your fine-tuned model ID
        prompt=prompt,
        max_tokens=150,  # You can adjust the max_tokens parameter as needed
        temperature=1,  # Adjust the temperature for more random or conservative outputs
        stop=None,  # You can specify a stopping condition if needed
        frequency_penalty=0.0,
        presence_penalty=0.0
    )
    generated_text = response.choices[0].text.strip()

    # Print the generated text
    return jsonify({"message": generated_text})
    

def audio():
    userPrompt = request.get_json()['prompt']
    token = os.getenv('BARDAI_API_KEY')
    bard = Bard(token=token)
    response = bard.speech(userPrompt)
    with open('output.ogg', 'wb') as file:
        file.write(response)

    return jsonify({'ok':True, 'response':'Done'})