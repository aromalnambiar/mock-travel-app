import React from "react";
import styled from 'styled-components';
import Mainbar from "./components/screens/Mainbar";
import { Route, BrowserRouter as Router,Routes} from "react-router-dom";
import './App.css';
import Placeall from "./components/screens/Placeall";
import Viewplace from "./components/screens/Viewplace";
function App() {
  return (
    <div>
      <Wrapper>
        <Router>
          <Mainbar />
          <Routes>
            <Route path="/" element={<Placeall />} />
            <Route path="/:id" element={<Viewplace />} />
          </Routes>
        </Router>
      </Wrapper>
    </div>
  );
}

export default App;
 const Wrapper= styled.div`
  width:90%;
  margin:0 auto;
  padding-top:20px;
 `;