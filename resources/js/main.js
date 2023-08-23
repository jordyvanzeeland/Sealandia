import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Example from "./components/Example";
import Login from "./components/Login"
   
const Main = () => {
    return (
        <Router>
            <Routes>
                {!localStorage.getItem('token') ? <Route exact path="/"  element={<Login/>} /> : <Route exact path="/"  element={<Example/>} /> }
                <Route exact path="/login"  element={<Login/>} />
            </Routes>
        </Router>
    );
}
   
export default Main;
   
if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <Main/>
        </React.StrictMode>
    )
}