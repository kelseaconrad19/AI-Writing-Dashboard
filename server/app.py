from flask import Flask, jsonify, request
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)
load_dotenv()


client = OpenAI(
    api_key=os.getenv("OPEN_API_KEY")  # Retrieves the key from the .env file
)

@app.route('/api/suggest', methods=['POST'])
def suggest():
  data = request.json
  prompt = data.get('prompt', '')
  try:
    response = client.chat.completions.create(
      model="gpt-3.5-turbo",
      messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": prompt}
      ],
      max_tokens=100
    )
    suggestion = response.choices[0].message.content.strip()
    return jsonify({"suggestion": suggestion})
  except Exception as e:
    return jsonify({"error": str(e)}), 500

@app.route('/')
def index():
    return "Server is running!"

@app.errorhandler(404)
def page_not_found(e):
    return jsonify({"error": "Not Found"}), 404

if __name__ == '__main__':
    app.run(debug=True)