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
          <h3 className="card-title">Achievement 1</h3>
          <p className="card-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus mollis dolor vitae fringilla.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Achievement 2</h3>
          <p className="card-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus mollis dolor vitae fringilla.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Achievement 3</h3>
          <p className="card-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus mollis dolor vitae fringilla.
          </p>
        </div>
        
        <div className="card">
          <h3 className="card-title">Achievement 4</h3>
          <p className="card-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus mollis dolor vitae fringilla.
          </p>
        </div>
      </div>
    </section>
    <section className="achievements-section">
    <div className="card-container">
      <div className="card">
        <h3 className="card-title">Achievement 1</h3>
        <p className="card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus mollis dolor vitae fringilla.
        </p>
      </div>
      <div className="card">
        <h3 className="card-title">Achievement 2</h3>
        <p className="card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus mollis dolor vitae fringilla.
        </p>
      </div>
      <div className="card">
        <h3 className="card-title">Achievement 3</h3>
        <p className="card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus mollis dolor vitae fringilla.
        </p>
      </div>
      <div className="card">
        <h3 className="card-title">Achievement 3</h3>
        <p className="card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus mollis dolor vitae fringilla.
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
