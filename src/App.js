import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import LessonsListComponent from './components/LessonsListComponent';
import LessonsMainComponent from './components/LessonsMainComponent';
import LessonDetailComponent from "./components/LessonDetailComponent";
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import AuthComponent from "./components/AuthComponent";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/lessons-main"} className="navbar-brand">
            Ace SpaceX
          </Link>
          <div className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to={"/lessons-main"} className="nav-link">
                Bài học
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/challenges"} className="nav-link">
                Thử thách
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li> */}
          </div>
          <div className="header-right nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </div>

        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<LessonsMainComponent/>} />
            <Route path="/tutorials" element={<TutorialsList/>} />
            <Route path="/add" element={<AddTutorial/>} />
            <Route path="/tutorials/:id" element={<Tutorial/>} />
            <Route path="/lessons-main" element={<LessonsMainComponent/>} />
            <Route path="/lessons/:id" element={<LessonsListComponent/>} />
            <Route path="/lesson/:id" element={<LessonDetailComponent/>} />
            <Route path="/login" element={<AuthComponent/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
