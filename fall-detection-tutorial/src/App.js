/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Overview from './Components/Overview';
import Algorithms from './Components/Algorithm';
import Applications from './Components/Applications';
import Bibliography from './Components/Bibliography';
import Quiz from './Components/Quiz';
import './App.css'; // Ensure to import App.css for styling

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/algorithms" element={<Algorithms />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/bibliography" element={<Bibliography />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Overview from './Components/Overview';
import Algorithms from './Components/Algorithm';
import Applications from './Components/Applications';
import Bibliography from './Components/Bibliography';
import Quiz from './Components/Quiz';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/algorithms" element={<Algorithms />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/bibliography" element={<Bibliography />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;