import React,{useRef} from 'react'
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import { drawMesh } from './Triangulation';
function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  //load face mesh model
  const runFaceMesh = async () => {
    const net = await facemesh.load({
      inputResolution: { width: 640, height: 480 },
      scale: 0.8,
    });
    setInterval(() => {
      detect(net)
    }, 100);
  }

  //Detect function
  const detect = async (net) => {
    if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState === 4) {

      //Get Video Properties
      // const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      //Set Video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      //Set Canvas width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      //Make detections
      const face = await net.estimateFaces(webcamRef.current.video);
      console.log(face);

      //Get canvas context for drawing
      const ctx = canvasRef.current.getContext("2d");
      drawMesh(face, ctx);
    }
  }
  runFaceMesh();
  return (
    <>
      <Webcam ref={webcamRef} />
      <canvas ref={canvasRef}></canvas>
    </>
  );
}

export default App;