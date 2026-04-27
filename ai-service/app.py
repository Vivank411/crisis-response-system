from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

model = pickle.load(open("model.pkl", "rb"))
vectorizer = pickle.load(open("vectorizer.pkl", "rb"))

@app.route("/predict", methods=["POST"])
def predict():
    text = request.json.get("message")
    vec = vectorizer.transform([text])
    prediction = model.predict(vec)[0]
    return jsonify({"type": prediction})

app.run(port=6000)
