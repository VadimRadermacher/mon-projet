import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './App.css';
import './Sass.scss';

function App() {
  return (
    <section className="bg-dark">
      <div className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="text-light border-left border-light p-2 slideInLeft">
                <h1>Vadim Radermacher</h1>
                <small>Junior Web Developper</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-light">
        <div className="container">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
      </div>
    </section>
  );
}

export default App;
