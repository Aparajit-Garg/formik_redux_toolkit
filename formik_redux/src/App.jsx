import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import CreateForm from "./components/CreateForm/CreateForm";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
        <NavBar />
        {/* <CreateForm /> */}
        <Router>
            <Routes>
                <Route path="/create" element={<CreateForm />} />
            </Routes>
        </Router>
    </React.Fragment>
  )
}

export default App;