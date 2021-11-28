import React from 'react';
import './App.css';
import PrivateRouter from "./component/PrivateRouter";
import {Route, Routes} from "react-router-dom";
import Auth from "./pages/Auth";
import Main from "./pages/Main";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <ToastContainer/>
            <Routes>
                <Route path='/' element={<Auth/>}/>
                <Route path='/main' element={<PrivateRouter element={Main}/>}/>

            </Routes>
        </>
    );
}

export default App;
