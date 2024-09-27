/*import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Fall Detection Review!</h2>
      <p>This tutorial covers the latest trends and technologies in fall detection systems.</p>
    </div>
  );
};

export default Home;*/

import React from 'react';
import './Home.css';
import heroImage from './homepageimage.jpg'; // Import your image here

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src={heroImage} alt="Fall Detection" className="hero-image" />
        <div className="hero-text">
          <h2>Welcome to the Fall Detection Research Tutorial!</h2>
          <p>This tutorial covers the latest trends and technologies in fall detection systems.</p>
          <p>Tutorial page built using React and Github Page.</p>
        </div>
      </div>
      <div className="content-section">
        <h3>Why Fall Detection?</h3>
        <p>Elderly falls pose a significant health risk, requiring immediate action to prevent severe outcomes. This tutorial explores the development of a real-time fall detection system using deep learning. By analyzing posture and detecting sudden movements, this system can swiftly alert caregivers. Built on cutting-edge convolutional neural networks (CNNs), it offers a non-intrusive, efficient solution for fall detection in homes, hospitals, and care facilities. Dive into the latest research, methodologies, and practical applications behind this innovative approach to safeguard elderly individuals.</p>
      </div>
      <hr className="divider" />
      <div className="presented-by">
        <p>Presented by: Sailesh Kumar Kishorekumar Lekha</p>
      </div>
    </div>
  );
};

export default Home;

