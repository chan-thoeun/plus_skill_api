import React, { Suspense , useEffect} from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import sal from 'sal.js';
import SignIn from './auth/sign-in';
import SignUp from './auth/sign-up';
import ProfileTeacher from './partner/profile-teacher';
import { PrivateRoute } from '../route';
import { Layouts } from '../layout';

import CourseStyle1 from '../components/course-style-1';
import CourseStyle2 from '../components/course-style-2';
import CourseStyle3 from '../components/course-style-3';
import CourseStyle4 from '../components/course-style-4';
import CourseStyle5 from '../components/course-style-5';

import ErrorPage from './404';

function MyApp() {
    useEffect( () => {
        sal();
    }, [] );

    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route path="*" element={
                            <PrivateRoute>
                              <Layouts />
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
