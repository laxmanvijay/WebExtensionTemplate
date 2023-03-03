import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { HomeWidget } from "./components/home/home";
import { LoginWidget } from "./components/login/login";
import './popup.css'

const Popup = () => {

    return (
        <>
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<LoginWidget />} />
                <Route path="/home" element={<HomeWidget />} />
            </Routes>
        </MemoryRouter>
        </>
    )
};

export default Popup;