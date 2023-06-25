import React, { Suspense , useEffect} from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import sal from 'sal.js';
import SignIn from './auth/sign-in';
import SignUp from './auth/sign-up';
import { PrivateRoute } from '../route';
import { DefaultLayout } from '../layout';
// import LayoutAdmin from '../layout/admin';
import ErrorPage from './404';
// import '../../../sass/app.scss';

function MyApp() {
    useEffect(() => {
        sal();
    }, [] );

    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route path="*" element={
                            <PrivateRoute>
                              <DefaultLayout />
                            </PrivateRoute>
                        }
                    />
                    <Route exact path="/sign_in" name="Sign In" element={<SignIn />} />
                    <Route exact path="/sign_up" name="Sign Up" element={<SignUp />} /> 
                    <Route exact path="/404" name="404" element={<ErrorPage/>} />
                     <Route path="*" element={<a href="/404" replace />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default MyApp;
