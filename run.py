import cv2
import numpy as np
from tensorflow import keras

# Load the model
model = keras.models.load_model('mnist_style_model.h5')

# Open the webcam
cap = cv2.VideoCapture(0)

# function which applies the model to a frame
def predict_sign_language(frame):
    # Crop the frame to the smallest between height and width
    height, width, _ = frame.shape
    min_dim = min(height, width)
    frame = frame[0:min_dim, 0:min_dim]
    frame = cv2.resize(frame, (28, 28))

    # Greyscale the frame and normalize it
    frame_gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    frame_normalized = frame_gray / 255.0
    frame_flat = frame_normalized.flatten()
    frame_flat = np.array([frame_flat])

    # Predict the class
    prediction = model.predict(frame_flat)
    predicted_class = np.argmax(prediction)

    # Resize the frame to a larger size for display
    frame_gray_large = cv2.resize(frame_gray, (224, 224))

    # Return the frame and the predicted class
    return frame_gray_large, predicted_class

# Main loop
while True:

    # retreive the webcam feed
    ret, frame = cap.read()


    if not ret:
        break

    # Apply the model to the frame
    frame_gray_large, predicted_class = predict_sign_language(frame)

    # Display the frame and the predicted class
    cv2.putText(frame, f'Predicted Class: {predicted_class}', (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    cv2.imshow('Sign Language Recognition', frame)
    cv2.imshow('Large Grayscale Image', frame_gray_large)

    # Press q to quit
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the webcam and close all windows
cap.release()
cv2.destroyAllWindows()
