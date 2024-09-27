/*import React from 'react';

const Quiz = () => {
  return (
    <div>
      <h2>Quiz on Fall Detection</h2>
      <p>Test your knowledge about fall detection systems with this quiz.</p>
    </div>
  );
};

export default Quiz;*/

import React, { useState } from 'react';
import './Quiz.css'; // Ensure to import the CSS file

const Quiz = () => {
  const questions = [
    {
      question: "What is the primary purpose of a fall detection system?",
      options: [
        "To prevent falls entirely",
        "To detect falls and alert caregivers",
        "To track physical activity",
        "To monitor sleep patterns"
      ],
      answer: "To detect falls and alert caregivers",
    },
    {
      question: "Which algorithm is commonly used for real-time fall detection?",
      options: [
        "Support Vector Machine",
        "YOLO (You Only Look Once)",
        "K-Means Clustering",
        "Random Forest"
      ],
      answer: "YOLO (You Only Look Once)",
    },
    {
      question: "What type of device is often used in modern fall detection systems?",
      options: [
        "Desktop computers",
        "IoT devices like smartphones",
        "Wearable fitness trackers",
        "Drones"
      ],
      answer: "IoT devices like smartphones",
    },
    {
      question: "Which sensor is commonly utilized for detecting falls?",
      options: [
        "Heart rate sensor",
        "Triaxial accelerometer",
        "Temperature sensor",
        "Proximity sensor"
      ],
      answer: "Triaxial accelerometer",
    },
    {
      question: "What feature can a fall detection app provide after a fall is detected?",
      options: [
        "Recommending exercises",
        "Calling emergency services",
        "Providing health tips",
        "Tracking diet"
      ],
      answer: "Calling emergency services",
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(''));
  const [score, setScore] = useState(null);

  const handleOptionChange = (index, option) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = option;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const calculatedScore = selectedAnswers.reduce((total, answer, index) => {
      return answer === questions[index].answer ? total + 1 : total;
    }, 0);
    setScore(calculatedScore);
  };

  return (
    <div className="quiz-container">
      <h2>Quiz on Fall Detection</h2>
      <p>Test your knowledge about fall detection systems with this quiz.</p>
      <form>
        {questions.map((q, index) => (
          <div key={index} className="question">
            <p>{q.question}</p>
            {q.options.map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name={`question${index}`}
                  value={option}
                  checked={selectedAnswers[index] === option}
                  onChange={() => handleOptionChange(index, option)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
      {score !== null && (
        <div className="quiz-result">
          <h3>Your Score: {score} out of {questions.length}</h3>
          <p>{score === questions.length ? "Excellent!" : score > questions.length / 2 ? "Good job!" : "Keep trying!"}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;