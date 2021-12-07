import "./App.css";
import Header from "./Components/Header";
import AddUser from "./Components/Pages/AddUser";
import Contact from "./Components/Pages/ContactUs";
import Home from "./Components/Pages/Home";
import Error from "./Components/Pages/Error";
import Edituser from "./Components/Pages/Edituser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser/" element={<AddUser />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/edituser/:id" element={<Edituser />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
