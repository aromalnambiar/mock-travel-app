import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Places from "./components/screens/Places";
import Place from "./components/screens/Place";
import NotFound from "./components/screens/NotFound";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";

function App(props) {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Places />} />
          <Route path="/auth/login/" element={<Login />} />
          <Route path="/auth/create/" element={<Signup />} />
          <Route path="/place/:id" element={<Place />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
