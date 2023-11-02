import tensorflow as tf
from tensorflow import keras
from keras import layers
import pandas as pd

# Define data paths and vars
csv_file = './archive/sign_mnist_train.csv'
image_size = (28, 28)
batch_size = 256

# Load and preprocess the data from the dataset (CSV format)
df = pd.read_csv(csv_file)
labels = df.iloc[:, 0]  # First column is the label
data = df.iloc[:, 1:].values / 255.0  # Normalize the pixel values

# Split the data into training and validation sets
from sklearn.model_selection import train_test_split
x_train, x_val, y_train, y_val = train_test_split(data, labels, test_size=0.2, random_state=123)

datagen = tf.keras.preprocessing.image.ImageDataGenerator()

# Create a simple CNN model
model = keras.Sequential([
    layers.Reshape(target_shape=(28, 28, 1), input_shape=(28 * 28,)),
    layers.Conv2D(32, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Flatten(),
    layers.Dense(128, activation='relu'),
    layers.Dense(26, activation='softmax')  # Each letter of the alphabet (26 chars)
])

# Create a custom optimizer (for Apple Silicon, as the default one is slower)
legacy_adam = tf.keras.optimizers.legacy.Adam(learning_rate=0.001)

# Compile the model
model.compile(optimizer=legacy_adam, loss='sparse_categorical_crossentropy', metrics=['accuracy'])

# Train the model
history = model.fit(
    x_train, y_train,
    validation_data=(x_val, y_val),
    batch_size=batch_size,
    epochs=10,
)

# Save the trained model
model.save('mnist_style_model.h5')
