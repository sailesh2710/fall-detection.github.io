/*import React from 'react';
import { Link } from 'react-router-dom';


const Overview = () => {
  return (
    <div>
      <h2>Overview of Fall Detection Systems</h2>
      <p>In this section, we discuss the key concepts and importance of fall detection systems in healthcare.</p>
    </div>
  );
};
export default Overview;*/


import React from 'react';
import './Overview.css'; // CSS file for this page
import introImage from './introimage.png'; // Replace with the actual path of your image
import sensorImage from './sensors.webp'; // Replace with the actual path of your image
import classificationImage from './classfication.webp'; // Replace with the actual path of your image
import architectureImage from './arch.png'; // Replace with actual image path

const Overview = () => {
  return (
    <div className="overview-container">
      <h2>Overview of Fall Detection Systems</h2>

      {/* Introduction and Problem Definition */}
      <div className="section">
        <img src={introImage} alt="Introduction and Problem Definition" className="section-image" />
        <div className="section-text">
          <h3>Introduction and Problem Definition</h3>
          <p>
            Ensuring elderly safety requires effective fall detection. However, traditional systems struggle with handling complex movements, lighting conditions, and cluttered environments. This project aims to address these challenges using deep learning and computer vision to build a reliable, real-time detection system.
          </p>
        </div>
      </div>

      {/* Sensor Possibilities */}
      <div className="section reverse">
        <img src={sensorImage} alt="Sensor Possibilities" className="section-image" />
        <div className="section-text">
          <h3>Sensor Possibilities</h3>
          <p>
            Various sensors can aid in fall detection. This includes infrared for low light and color cameras for visual monitoring. Wearable devices<b>[1]</b> like accelerometers and gyroscopes<b>[2]</b> provide additional motion data. Modern project employs a color camera<b>[1][2]</b> with computer vision techniques for real-time monitoring.
          </p>
        </div>
      </div>

      {/* Identifying and Classifying Falls */}
      <div className="section">
        <img src={classificationImage} alt="Identifying and Classifying Falls" className="section-image" />
        <div className="section-text">
          <h3>Identifying and Classifying Falls</h3>
          <p>
            Detecting falls involves analyzing posture changes and sudden movement shifts. Techniques like background subtraction and models like YOLOv8<b>[2]</b> help isolate and classify falls in real-time based on body orientation. If fall is detected message is sent to the head of the
            department using GSM module<b>[2]</b>.
          </p>
        </div>
      </div>

      {/* System Architecture */}
      <div className="section reverse">
        <img src={architectureImage} alt="System Architecture" className="section-image" />
        <div className="section-text">
          <h3>System Architecture</h3>
          <p>
            This architecture diagram outlines a fall detection system that integrates cloud technology with smartphone capabilities. The system activates when sensors on the smartphone detect a potential fall. A local machine learning (ML) model analyzes the sensor data to confirm the fall event. Upon confirmation, real-time notifications are sent to caregivers, ensuring prompt assistance.
          </p>
          <p>Key components include:</p>
          <ul>
            <li>Sensor Input: Accelerometers and gyroscopes detect motion patterns.</li>
            <li>Local ML Model: Processes data to assess fall risk.</li>
            <li>Cloud Integration: Manages data storage and model updates.</li>
            <li>Notification System: Alerts caregivers for quick response.</li>
          </ul>
          <p>
            This design combines immediate local processing with scalable cloud features for effective fall detection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;