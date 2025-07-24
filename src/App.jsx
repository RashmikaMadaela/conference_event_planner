import React from "react";
import "./App.css";
import "./pageTransitions.css";
import ConferenceEvent from "./ConferenceEvent";
import AboutUs from "./AboutUs";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useRef } from "react";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const nodeRef = useRef(null);

  const InitialPage = () => (
    <header className="first_page">
      <div className="main_event">
        <div className="first_page_name_btn">
          <h1 className="budget_heading">Conference Expense Planner</h1>
          <p className="budget_sentence"> Plan your next major event with us!</p>
          <div className="getstarted_btn">
            <button onClick={() => navigate("/event")} className="get-started-btn">
              Get Started
            </button>
          </div>
        </div>
        <div className="aboutus_main">
          <AboutUs />
        </div>
      </div>
    </header>
  );

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        classNames="page-fade"
        timeout={350}
        nodeRef={nodeRef}
        unmountOnExit
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<InitialPage />} />
            <Route path="/event" element={<ConferenceEvent />} />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default App;
