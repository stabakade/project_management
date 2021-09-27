import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Projects from './components/Projects';
import EditProject from './components/EditProject';
import AddProject from './components/AddProject';
import logo from './logo.jpg';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
              </a>
              <Link to="/" className="navbar-brand">Project Management Application</Link>
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Projects</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/add" className="nav-link">Add Project</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <br/>
          <Route path="/" exact component={Projects} />
          <Route path="/edit/:id" component={EditProject} />
          <Route path="/add" component={AddProject} />
        </div>
      </Router>
    );
  }
}
export default App;