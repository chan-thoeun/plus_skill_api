import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import routes from '../router';
import Header from "./headers/header";
import HeaderTwo from "./headers/header-2";
import HeaderThree from "./headers/header-3";
import Footer from "./footers/footer";
import FooterTwo from "./footers/footer-2";
import FooterThree from "./footers/footer-3";
import FooterFour from "./footers/footer-4";
import Wrapper from "./wrapper";
import ErrorPage from '../pages/404';

const Layouts = () => {
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
    HeaderTwo,
    HeaderThree,
    Footer,
    FooterTwo,
    FooterThree,
    FooterFour,
    Wrapper,
    Layouts
}