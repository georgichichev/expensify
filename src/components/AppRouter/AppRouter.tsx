import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import LifeView from "../../views/LifeView";
import WorkView from "../../views/WorkView";
import Header from "../Header/Header";
import { Container } from "@mantine/core";

const AppRouter = () => {
    return (
        <Container>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/life" />} />
                    <Route path="/life" element={<LifeView />} />
                    <Route path="/work" element={<WorkView />} />
                </Routes>
            </BrowserRouter>
        </Container>
    );
};

export default AppRouter;
