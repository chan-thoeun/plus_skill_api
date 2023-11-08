import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import routes from '../router';
import Header from "./headers/header";
import Footer from "./footers/footer";
import Wrapper from "./wrapper";
import ErrorPage from '../pages/404';

const DefaultLayout = () => {
    return (
        <Routes>
            {routes.map((route, idx) => {
                return (
                    route.element && (
                        <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            element={<route.element />}
                        />
                    )
                )
            })}
            <Route path="/" element={<Navigate to="home" replace />} />
            <Route exact path="*" name="Course Style 1" element={<ErrorPage />} />
        </Routes>
    )
}

export {
    Header,
    Footer,
    Wrapper,
    DefaultLayout
}