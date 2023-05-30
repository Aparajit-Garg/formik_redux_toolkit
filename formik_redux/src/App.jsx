import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import CreateForm from "./components/CreateForm/CreateForm";
import {Routes, Route} from "react-router-dom";
import ShowData from "./components/ShowData/ShowData";
import "./App.css";
import EditUser from './components/EditUser/EditUser';

function App() {
  return (
    <React.Fragment>
        <NavBar />
            <Routes>
                <Route path="/create" element={<CreateForm />} exact />
                <Route path="/showPosts" element={<ShowData />} exact />
                <Route path="/edit/:id" element={<EditUser />} />
            </Routes>
    </React.Fragment>
  )
}

export default App;