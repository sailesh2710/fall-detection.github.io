/*import React from 'react';

const Applications = () => {
  return (
    <div>
      <h2>Applications of Fall Detection</h2>
      <p>This section covers real-world applications of fall detection systems in different environments, such as homes and hospitals.</p>
    </div>
  );
};

export default Applications;*/

import React from 'react';
import './Applications.css'; // Ensure to import the CSS file
import app1 from './app1.png';
import app2 from './app2.png';

const Applications = () => {
  return (
    <div className="applications-container">
      <h2>Applications of Fall Detection</h2>
      <p>
        This section covers real-world applications of fall detection systems 
        in different environments, such as homes, hospitals and Work Areas.
      </p>

      <div className="application">
        <h3>1. Fall Detection and Safety Accessories Monitoring System</h3>
        <img src={app1} alt="[Image Description]" className="algorithm-image" />
        <p>
          The proposed application[2] for fall detection utilizes a Raspberry Pi to 
          continuously monitor the environment. The system employs a deep 
          learning algorithm called YOLOv8 for fall detection, and it also 
          detects safety accessories such as helmets and vests through 
          object recognition methods trained on deep learning models. 
          Integration with a GSM module enables the system to send alerts 
          through messages in the event of a fall. Alerts are also triggered 
          locally using buzzer and LED indicators to notify nearby individuals. 
          The system's efficiency and reliability are evaluated through 
          various performance metrics on relevant datasets, demonstrating 
          promising advancements in safety monitoring.
        </p>
        <p>
          The YOLOv8 model processes images captured by the Pi Cam, detecting 
          workers, safety accessories, and potential fall incidents. If a fall 
          event or misuse of safety accessories is detected, appropriate 
          actions are triggered. The system activates an alarm, LED indicator, 
          and promptly sends email notifications for immediate assistance. 
          Additionally, it monitors adherence to safety protocols, sounding a 
          buzzer and activating a LED if a worker is detected without a helmet 
          or jacket. This comprehensive approach ensures quick response and 
          intervention in case of safety risks.
        </p>
      </div>

      <div className="application">
        <h3>Whoops: Cloud-Based Fall Detection System</h3>
        <img src={app2} alt="[Image Description]" className="algorithm-image" />
        <p>
          The Whoops system is a Cloud-based solution <b>[6]</b> designed for large-scale 
          fall detection and monitoring. It efficiently orchestrates Cloud 
          resources to accommodate the growing number of monitored individuals. 
          The system enables fall detection in the Cloud, on personal IoT 
          devices (Edge), and monitors activities within a Cloud data center. 
          This section outlines the architecture, components, data stream 
          processing, event classification, and data storage functionalities of 
          the Whoops system.
        </p>
        <p>
          The Whoops system consists of two main parts: a mobile phone serving 
          as the IoT device for sensing, collecting, processing, and 
          transmitting data, and a data center for monitoring multiple people, 
          including patients and older adults. The mobile application, named 
          Whoops, retrieves data from sensors and presents the results of data 
          analysis, including alerts for detected falls that require confirmation 
          from the monitored individual. In case of a fall, the application can 
          automatically call emergency services after a configurable timer.
        </p>
        <p>
          The system utilizes mobile phones, equipped with a triaxial accelerometer and gyroscope for fall detection 
          without needing external devices. Sensor data is sent to the Cloud data 
          center via the IoT Hub service, which acts as the Cloud Gateway in the 
          Azure environment, facilitating bidirectional Device-to-Cloud connectivity.
        </p>
      </div>
    </div>
  );
};

export default Applications;