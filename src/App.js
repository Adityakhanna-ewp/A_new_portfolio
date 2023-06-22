import React, { useState } from 'react';
import './App.css';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="App">
      <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
        <div className="logo">Logo</div>
        <div className={`nav-icon ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
          <li><a href='my-project/src/App.js'>Home</a></li>
          <li><a href='#'>About Me</a></li>
          <li><a href='#'>Work Experience</a></li>
          <li><a href='#'>Achievements</a></li>
          <li><a href='#'>Contact Me</a></li>
        </ul>
      </nav>
      <div className="content">
      // about us-----






      //skills


      // achivements 



<section className="achievements-section">
      <h2 className="section-title">Achievements</h2>
      <div className="card-container">
        <div className="card">
          <h3 className="card-title">Leading a team of 70+ Performance Test engineers and developers</h3>
          <p className="card-content">
          Currently serving as an Associate Director at Wolters Kluwer India, responsible for managing and mentoring a large team, showcasing strong leadership and organizational skills.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Published a book on Performance Testing: </h3>
          <p className="card-content">
          Co-authored ""Performance Testing Unleashed. A Journey from Novice to Expert"", demonstrating expertise and knowledge in the field of performance testing. This achievement highlights the persons thought leadership and contribution to the industry.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Extensive experience in Performance Testing and Engineering</h3>
          <p className="card-content">
          Accumulating 17+ years of experience, developing a deep understanding of performance testing methodologies and tools such as VSTS and Load Runner. This experience demonstrates expertise in optimizing application performance and ensuring high-quality deliverables.
          </p>
        </div>
        
        <div className="card">
          <h3 className="card-title">Implementing an analytical culture for RCA</h3>
          <p className="card-content">
          Promoting and driving an analytical culture to perform root cause analysis (RCA) by correlating tool data with various APM tools like App Insight, App Dynamics, Idera, DataDog, etc. This achievement showcases a focus on continuous improvement and optimization.
          </p>
        </div>
      </div>
    </section>



  //achivements ----------------------
      </div>
    </div>
  );
}

export default App;
