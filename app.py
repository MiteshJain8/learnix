import os
os.environ['CUDA_VISIBLE_DEVICES'] = '-1'  # Disable GPU

from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load the trained model
with open('app/deaf-dumb/model.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.json
    features = np.array(data['features']).reshape(1, -1)
    prediction = model.predict(features)[0]
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True)