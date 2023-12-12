import os
import cv2
import shutil
import time
import json


def vidToFrame(vid_file,out_dir):


    video_capture = cv2.VideoCapture(vid_file)

    output_folder = out_dir
    #shutil.rmtree(output_folder)
    # Create the output folder if it doesn't exist
    os.makedirs(output_folder, exist_ok=True)

    # Initialize frame count and flag
    vid_cnt = 0
    success = True



    # Read the next frame
    #success, frame = video_capture.read()

    
    frame_count=0
    while frame_count < 48:
        
        frame_count += 1
        success, frame = video_capture.read()
        frame_path = os.path.join(output_folder, f"frame_{frame_count}.jpg")

        if frame is not None:
            cv2.imwrite(frame_path, frame)

        
#        cv2.imshow('frame', frame)
        
        if cv2.waitKey(20) & 0xFF == ord('q') :
            break

    # Release the video capture object
    video_capture.release()
    cv2.destroyAllWindows()





file_path = './WASL/archive/WLASL_v0.3.json'
missing_file_path = './WASL/archive/missing.txt'
videos_dir = './WASL/archive/videos/'

# Load the WLASL dataset
with open(file_path) as file:
    wlasl = json.load(file)

# Read the missing video IDs from the file
with open(missing_file_path, 'r') as file:
    missing_videos = file.read().splitlines()

# Specify the base directory for the dataset
dataset_dir = './WASL/archive/frames'

# Create necessary directories
os.makedirs(dataset_dir, exist_ok=True)
os.makedirs(os.path.join(dataset_dir, 'Train'), exist_ok=True)
os.makedirs(os.path.join(dataset_dir, 'Test'), exist_ok=True)

# Process each class in the WLASL dataset
for class_data in wlasl:
    class_name = class_data['gloss']
    print(class_name)
    
    for instance in class_data['instances']:
        video_id = instance['video_id']
        
        if video_id not in missing_videos:
            video_file = os.path.join(videos_dir, video_id + '.mp4')
    
            if instance['split'] == 'train':
                train_dir = os.path.join(dataset_dir, 'Train', class_name, video_id)
                os.makedirs(train_dir, exist_ok=True)
                vidToFrame(video_file, train_dir)
                print('train', video_id)
            else:
                test_dir = os.path.join(dataset_dir, 'Test', class_name, video_id)
                os.makedirs(test_dir, exist_ok=True)
                vidToFrame(video_file, test_dir)
                print('test', video_id)