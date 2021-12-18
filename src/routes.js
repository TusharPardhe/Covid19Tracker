import React, { Suspense } from "react";
import { Route, BrowserRouter, Navigate, Routes as Switch } from "react-router-dom";
import NavBar from './components/navbar/navbar';
import GraphComponent from "./components/graph/graph.component";
import { ROUTES } from "./constants/app.constants";

const Dashboard = React.lazy(()=> import("./components/dashboard/dashboard.component"));
const About = React.lazy(()=> import("./components/about/about.component"));

const Routes = () => {
    return (
        <Suspense fallback="">
            <BrowserRouter>
                <NavBar />
                <Switch>
                <Route exact path="/" element={<Navigate to={ROUTES.DASHBOARD} />} />   
                    <Route exact path={ROUTES.DASHBOARD} element={<Dashboard />} />
                    <Route exact path={ROUTES.GRAPHS} element={<GraphComponent />} />
                    <Route exact path={ROUTES.ABOUT} element={<About />} />
                    <Route path="/*" element={null} />
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
};

export default Routes;
