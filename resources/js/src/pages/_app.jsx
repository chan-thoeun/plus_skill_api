import React, { Suspense , useEffect} from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import sal from 'sal.js';
import SignIn from './auth/sign-in';
import SignUp from './auth/sign-up';
import ProfileTeacher from './partner/profile-teacher';

import HomeMain from '../pages';

function MyApp() {
    useEffect( () => {
        sal();
    }, [] );

    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    {/* <Route path="*"
                        element={
                            <Layouts />
                        }
                    /> */}
                     <Route exact path="/" name="Home" element={<HomeMain />} />
                    <Route exact path="/sign_in" name="Sign In" element={<SignIn />} />
                    <Route exact path="/sign_up" name="Sign Up" element={<ProfileTeacher />} /> 
                    {/* <Route exact path="/forgot" name="Forgot Password" element={<ForgotPassword />} /> */}
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default MyApp;
