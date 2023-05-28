import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import CreateForm from "./components/CreateForm/CreateForm";
import {Routes, Route} from "react-router-dom";
import ShowData from "./components/ShowData/ShowData";
import "./App.css";

function App() {
  return (
    <React.Fragment>
        <NavBar />
        {/* <CreateForm /> */}
        {/* <Router> */}
            <Routes>
                <Route path="/create" element={<CreateForm />} exact />
                <Route path="/showPosts" element={<ShowData />} exact />
            </Routes>
        {/* </Router> */}
    </React.Fragment>
  )
}

export default App;