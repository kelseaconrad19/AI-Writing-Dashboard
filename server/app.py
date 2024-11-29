from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return "Server is running!"

@app.errorhandler(404)
def page_not_found(e):
    return jsonify({"error": "Not Found"}), 404

if __name__ == '__main__':
    app.run(debug=True)