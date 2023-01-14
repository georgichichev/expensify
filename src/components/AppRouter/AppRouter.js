import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LifeView from "../../views/LifeView";
import WorkView from "../../views/WorkView";
import Header from "../Header/Header";

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/life" />} />
                    <Route path="/life" element={<LifeView />} />
                    <Route path="/work" element={<WorkView />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRouter;
