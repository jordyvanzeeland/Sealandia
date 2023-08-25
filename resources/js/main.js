import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Example from "./components/Example";
import Login from "./components/Login"
import ManageModules from './views/manage/Modules';
import ItemsList from './views/Itemslist';
import withRouter from './components/withRouter';
   
const Main = () => {
    return (
        <Router>
            <Routes>
                {!localStorage.getItem('token') ? <Route exact='true' path="/"  element={<Login/>} /> : <Route exact='true' path="/"  element={<Example/>} /> }
                <Route exact='true' path="/login"  element={<Login/>} />
                <Route exact='true' path="/manage/modules"  element={<ManageModules/>} />
                <Route exact='true' path="/module/:id"  element={<ItemsList/>} />
            </Routes>
        </Router>
    );
}
   
export default withRouter(Main);
   
if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <Main/>
    )
}