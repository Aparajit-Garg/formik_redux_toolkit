import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import CreateForm from "./components/CreateForm/CreateForm";
import {Routes, Route} from "react-router-dom";
import ShowData from "./components/ShowData/ShowData";
import "./App.css";
import EditUser from './components/EditUser/EditUser';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <React.Fragment>
        <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} exact />
                <Route path="/add" element={<CreateForm />} exact />
                <Route path="/showDirectory" element={<ShowData />} exact />
                <Route path="/edit/:id" element={<EditUser />} />
            </Routes>
    </React.Fragment>
  )
}

export default App;