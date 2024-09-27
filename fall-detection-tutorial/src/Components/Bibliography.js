/*import React from 'react';

const Bibliography = () => {
  return (
    <div>
      <h2>Annotated Bibliography</h2>
      <p>This section lists references and resources used in the preparation of this tutorial.</p>
      <ul>
        <li>Reference 1: Title, Author, Date, Source, Synopsis.</li>
        <li>Reference 2: Title, Author, Date, Source, Synopsis.</li>
        <li>Reference 3: Title, Author, Date, Source, Synopsis.</li>
        <li>Reference 4: Title, Author, Date, Source, Synopsis.</li>
        <li>Reference 5: Title, Author, Date, Source, Synopsis.</li>
      </ul>
    </div>
  );
};

export default Bibliography;*/

import React from 'react';
import './Bibliography.css'; // Ensure to import the CSS file

const Bibliography = () => {
  return (
    <div className="bibliography-container">
      <h2>Annotated Bibliography</h2>
      <p>
        This section lists references and resources used in the preparation of this tutorial.
      </p>
      <ul className="bibliography-list">
        <li>
          <a href="https://ieeexplore.ieee.org/document/9854070" target="_blank" rel="noopener noreferrer">
            <b>[1]</b> A. Raza, M. H. Yousaf and S. A. Velastin, "Human Fall Detection using YOLO: A Real-Time and AI-on-the-Edge Perspective," 2022 12th International Conference on Pattern Recognition Systems (ICPRS), Saint-Etienne, France, 2022, pp. 1-6, doi: 10.1109/ICPRS54038.2022.9854070. 
          </a>
          <p>
            <strong>Synopsis:</strong> This paper presents a real-time fall detection system using YOLO for effective monitoring of individuals. It explores AI-on-the-edge solutions for immediate processing and alerts.
          </p>
          <p>
            <strong>Reliability:</strong> Published in a reputable conference, the research employs a well-known object detection algorithm and is supported by experimental results demonstrating effectiveness.
          </p>
        </li>
        <li>
          <a href="https://ieeexplore.ieee.org/document/10625291" target="_blank" rel="noopener noreferrer">
            <b>[2]</b> N. B, P. K. R, A. Jestin, A. R and J. T, "Fall Detection and Safety Accessory Monitoring System using Deep Learning," 2024 IEEE International Conference on Information Technology, Electronics and Intelligent Communication Systems (ICITEICS), Bangalore, India, 2024, pp. 1-5, doi: 10.1109/ICITEICS61368.2024.10625291.
          </a>
          <p>
            <strong>Synopsis:</strong> This study proposes a deep learning-based fall detection and monitoring system that integrates safety accessories for enhanced user safety, particularly among the elderly.
          </p>
          <p>
            <strong>Reliability:</strong> As an upcoming IEEE conference paper, it promises innovative solutions and rigorous peer-review, making it a credible source for ongoing research.
          </p>
        </li>
        <li>
          <a href="https://ieeexplore.ieee.org/document/10113049" target="_blank" rel="noopener noreferrer">
            <b>[3]</b> A. Hegde, O. Patil, S. Belurgikar and P. V. Jani, "A Novel Approach to Fall Detection System using Computer Vision," 2023 9th International Conference on Advanced Computing and Communication Systems (ICACCS), Coimbatore, India, 2023, pp. 1906-1913, doi: 10.1109/ICACCS57279.2023.10113049.
          </a>
          <p>
            <strong>Synopsis:</strong> This paper introduces a computer vision-based fall detection system that enhances detection accuracy through innovative algorithms and methodologies.
          </p>
          <p>
            <strong>Reliability:</strong> The study's publication in a peer-reviewed conference lends credibility, and the authors' previous work adds to their expertise in the field.
          </p>
        </li>
        <li>
          <a href="https://ieeexplore.ieee.org/document/9823997" target="_blank" rel="noopener noreferrer">
            <b>[4]</b> C. Zhou, J. Xiao, A. Xiong and C. Zhang, "Human fall detection based on improved particle swarm optimization algorithm and neural network," 2022 3rd International Conference on Computer Vision, Image and Deep Learning & International Conference on Computer Engineering and Applications (CVIDL & ICCEA), Changchun, China, 2022, pp. 1-4, doi: 10.1109/CVIDLICCEA56201.2022.9823997.
          </a>
          <p>
            <strong>Synopsis:</strong> This research focuses on a hybrid approach for fall detection, utilizing an improved particle swarm optimization algorithm combined with neural networks to enhance detection capabilities.
          </p>
          <p>
            <strong>Reliability:</strong> The research was conducted in a well-regarded conference, and the innovative methodology is supported by solid experimental validation, making it a trustworthy source.
          </p>
        </li>
        <li>
          <a href="https://ieeexplore.ieee.org/document/10580626" target="_blank" rel="noopener noreferrer">
            <b>[5]</b> Vyshakh Krishnan, B. K. Abhilash and S. Govind, "A Robust Fall Detection System for Elderly Persons Using YOLO," 2024 5th International Conference on Innovative Trends in Information Technology (ICITIIT), Kottayam, India, 2024, pp. 1-5, doi: 10.1109/ICITIIT61487.2024.10580626.
          </a>
          <p>
            <strong>Synopsis:</strong> This paper proposes a robust fall detection system leveraging YOLO for real-time monitoring and alerts specifically designed for elderly individuals.
          </p>
          <p>
            <strong>Reliability:</strong> The use of YOLO, a widely recognized algorithm, and the credibility of the conference ensure that the research is reputable and applicable.
          </p>
        </li>
        <li>
          <a href="https://www.sciencedirect.com/science/article/pii/S0020025520304886" target="_blank" rel="noopener noreferrer">
            <b>[6]</b> Dariusz Mrozek, Anna Koczur, Bożena Małysiak-Mrozek, "Fall detection in older adults with mobile IoT devices and machine learning in the cloud and on the edge," Information Sciences, Volume 537, 2020, Pages 132-147, ISSN 0020-0255.
          </a>
          <p>
            <strong>Synopsis:</strong> This research explores fall detection methods using mobile IoT devices integrated with machine learning techniques in cloud and edge computing environments.
          </p>
          <p>
            <strong>Reliability:</strong> Published in the peer-reviewed journal "Information Sciences," the study provides a comprehensive overview of the current landscape in fall detection technology.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Bibliography;