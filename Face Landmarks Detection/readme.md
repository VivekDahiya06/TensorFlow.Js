# Face Landmarks Detection with TensorFlow.js 🎯

This project demonstrates real-time face landmarks detection using TensorFlow.js and your device's webcam. The app detects facial features like eyes, nose, mouth, and the overall face contour in real-time—all running directly in your browser.

### Key Features ✨
1) Real-time face detection using a live webcam feed. 📹
2) Facial landmarks detection including eyes, nose, mouth, and face contour. 👁️
3) Completely runs in the browser using TensorFlow.js—no backend needed. 🚀
4) Easy to set up and use—just run locally or host it on a static server. 🛠️

### Getting Started 🚀
To get the project running on your local machine:

1) Clone the repository:
```
git clone https://github.com/VivekDahiya06/TensorFlow.Js.git
cd TensorFlow.Js
```
2) Install the necessary dependencies:
```
npm install
```
3) Run the app:
```
npm start
```
Once the server starts, open your browser and navigate to http://localhost:3000. You'll be asked for permission to use your webcam. Upon granting access, the app will start detecting facial landmarks in real-time.

### How It Works 🧠
- The app uses the **Webcam API** to capture video input directly from your browser.
- **TensorFlow.js** processes the video feed using a pre-trained face landmarks detection model.
- Detected facial landmarks are drawn on the video feed in real-time, showing key points like eyes, nose, and mouth.

### Images 🖼️

<h1>Face Landmarks</h1>
<img src="public/Face_landmarks_Image.png" alt="Face Landmarks Example" width="350" height="350">

<h1>Face Map</h1>
<img src="public/face_map.jpg" alt="Face Landmarks Example" width="350" height="350">
Note :-If you close in to the Face Map you will see many points on the map which indicate how our model maps different part of our face and one thing to note is that the mapping always starts from the nose</p>


### Requirements 🛠️
- Node.js (for running the project locally).
- A browser that supports TensorFlow.js and webcam access (such as Chrome or Firefox).
### Technologies Used 💻
- TensorFlow.js: Machine learning in the browser.
- JavaScript: For app logic and TensorFlow integration.
- HTML5 & CSS: For the front-end interface.
- Web APIs: For accessing the webcam and rendering live video.

### Live Link 🔴
<<<<<<< HEAD
[![Netlify Status](https://api.netlify.com/api/v1/badges/e71b73c1-23ae-4e34-b5f5-7404b91b5164/deploy-status)](https://facelandmarksdetections.netlify.app)
=======
[![Netlify Status](https://api.netlify.com/api/v1/badges/51e67c23-5eea-4451-bab1-469b92cf2205/deploy-status)](https://face-landmarksdetections.netlify.app)
>>>>>>> 4c0a9d1 (Added all files to git)


### Contributing 🤝

Contributions are welcome! To contribute:
1) Fork this repository.
2) Create a new branch (git checkout -b feature-name).
3) Commit your changes (git commit -m 'Add feature').
4) Push to the branch (git push origin feature-name).
5) Open a pull request.

### Acknowledgments 🙌
TensorFlow.js for providing a powerful library for running machine learning models in the browser.

