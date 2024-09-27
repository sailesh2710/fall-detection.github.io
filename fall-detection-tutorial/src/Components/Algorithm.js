/*import React from 'react';

const Algorithms = () => {
  return (
    <div>
      <h2>Algorithms for Fall Detection</h2>
      <p>Here, we explore various algorithms used in fall detection, such as machine learning and deep learning approaches.</p>
    </div>
  );
};

export default Algorithms;*/

import React from 'react';
import './Algorithms.css'; // CSS file for this page
import algo1 from './algo1.png';
import algo2 from './algo2.png';
import algo3 from './algo3.png';

const Algorithms = () => {
  return (
    <div className="algorithms-container">
      <h2>Algorithms for Fall Detection</h2>
      <p>
        Here, we explore various algorithms used in fall detection, such as machine learning and deep learning approaches.
      </p>

      {/* Algorithm 3 */}
      <div className="algorithm-section">
        <h3>Algorithm 1: YOLO Algorithm for Fall Detection</h3>
          <img src={algo3} alt="[Image Description]" className="algorithm-image" />
        <p>The YOLO (You Only Look Once) algorithm<b>[5]</b> is a deep learning-based approach used for real-time fall detection by analyzing video feeds. It is particularly advantageous for its speed and accuracy in detecting falls and differentiating between various actions in a scene.</p>
<p>
<strong>Implementation:</strong> The YOLO (You Only Look Once) algorithm implements fall detection by treating the entire image as a single instance, allowing it to predict bounding box coordinates and class probabilities efficiently. The input image is divided into a grid (e.g., 3x3), with each cell responsible for detecting and classifying objects. The model is trained on labeled images of falls and normal activities, generating a 3x3x16 output during prediction, where values represent the probability of an object, bounding box coordinates, and class probabilities. Non-Max Suppression is then applied to eliminate overlapping detections, retaining only the most confident predictions. With the capability to process up to 45 frames per second, YOLO is well-suited for real-time fall detection applications.</p>


<p>
<strong>Result & Discussion:</strong> TThe paper demonstrates that YOLO and its variants are effective for real-time human fall detection on edge devices, enhancing accuracy with the UR fall dataset. The study identifies Tiny-YOLOv4 as the most suitable model for this purpose, paving the way for potential applications in broader human activity recognition.</p>
      </div>

      {/* Algorithm 1 */}
<div className="algorithm-section">
  <h3>Algorithm 2: Vision-Based Fall Detection by analyzing changes in the center of gravity, inclination angle, and fall velocity.</h3>
  <img src={algo1} alt="Flowchart of the Vision-Based Fall Detection Algorithm" className="algorithm-image" />
      <p>
The fall detector<b>[3]</b> is  component of the entire system, which has the intelligence to observe, identify a true fall, and undertake subsequent procedures. 
</p>
<p>
Generally, when it comes to a fall, people often imagine a person falling by transitioning from a vertical to a horizontal body position. However, the considered cases where there is no transition from a horizontal body position during or after the fall, e.g., a sleeping person falling from a bed. In the fall identifier solution, the paper aimed to detect falls by analyzing the changes in angle between the lower human body and the ground. The paper incorporated a threshold angle of 25° (lower threshold) and 75° (upper threshold) to accurately determine a true fall.
</p>
<p>
<strong>Implementation:</strong> The algorithm utilizes computer vision techniques to detect falls by analyzing changes in the center of gravity, inclination angle, and fall velocity. Key steps include body keypoints estimation using OpenPose, which estimates 25 keypoints of the human body, focusing on 6 keypoints (left ankle, right ankle, left knee, right knee, waist, and chest) for fall detection. The system also calculates the angle based on weight-normal reaction forces, establishing a threshold angle of 25° to determine falls accurately.
</p>
<p>
<strong>Successes:</strong> The system achieved high performance metrics, with an accuracy of 97.56%, precision of 95.23%, and a recall rate of 100%. These results demonstrate the effectiveness of the proposed model in accurately identifying true falls, including special cases such as a person falling from bed while sleeping.
</p>
<p>
<strong>Failures:</strong> Limitations include reliance on hard thresholds for detection, which may affect adaptability. The system's performance might decrease in situations where keypoints are not clearly visible. Improvements can be made by integrating machine learning algorithms to enhance detection flexibility and transitioning from hard to soft thresholds for better responsiveness.
</p>
  </div>

      {/* Algorithm 2 */}
      <div className="algorithm-section">
        <h3>Algorithm 3: Hybrid algorithm based on an improved particle swarm optimization algorithm and a neural network for real-time fall detection</h3>
        <img src={algo2} alt="[Image Description]" className="algorithm-image" />
        <p>A hybrid algorithm<b>[4]</b> based on an improved particle swarm optimization algorithm and a neural network for real-time fall detection in indoor environments. Human keypoints in video frames are first extracted using the alphapose model, and then the human keypoints are classified in real-time using an improved particle swarm optimization neural network model. 
</p>
<p>
<strong>Implementation:</strong> The human body posture skeleton diagram is a graph drawn according to the 18 joint points of the human body. Essentially, it's a set of coordinates that, when connected, describe a person's pose. When performing fall detection, the key points related to the limbs and the overall center of gravity can often provide more information that is conducive to detection. Therefore,  the four key points of the head and added the overall center of gravity as a new key point. The extraction of skeleton key points is very important, and its detection accuracy will directly affect the accuracy of behavior recognition and prediction accuracy. The main idea of the alphapose model is to extract high-quality human target regions and then perform joint detection on each human target region. This design ensures that the key points of the occluded part of the human body will not be obtained arbitrarily, ensuring the accuracy of pose estimation.
</p>

<p>
<strong>MLP Model:</strong> The multi-layer perception model (MLP) consists of an input layer, an output layer, and several hidden layers, and the addition of new activation functions enables the model to fit very complex situations. 
</p>

<p>
<strong>Particle Swarm Optimization:</strong> PSO is a popular swarm intelligence algorithm inspired by bird predation behavior. Each particle represents a set of possible solutions and searches for the optimal solution based on individual and global experiences. 
</p>

<p>
To enhance the searching ability of PSO, this paper proposes a mutation method to further improve the search capability, which includes randomly initializing half of the particles every 100 iterations.
</p>

<p>
<strong>Result & Discussion:</strong> The fall detection network is constructed as a three-layer MLP model, with the number of neurons in the hidden layer optimized through empirical formulas. The results demonstrate that the MLP-MLDIW can effectively detect falling behaviors with improved accuracy and convergence rates.
</p>
      </div>

      

      


      
    </div>
  );
};

export default Algorithms;