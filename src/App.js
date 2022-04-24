import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './components/ofHomePage/login';
import HomePage from "./HomePage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </div>
    );
}
export default App;
