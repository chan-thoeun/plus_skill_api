import React, { Suspense , useEffect} from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import sal from 'sal.js';
import SignIn from './auth/sign-in';
import SignUp from './auth/sign-up';
import ProfileTeacher from './partner/profile-teacher';

import HomeMain from '../pages';
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
                    {/* <Route path="*"
                        element={
                            <Layouts />
                        }
                    /> */}
                    <Route exact path="/" name="Home" element={<HomeMain />} />
                    <Route exact path="/sign-in" name="Sign In" element={<SignIn />} />
                    <Route exact path="/sign_up" name="Sign Up" element={<ProfileTeacher />} /> 
                    {/* <Route exact path="/forgot" name="Forgot Password" element={<ForgotPassword />} /> */}

                    {/* routes component */}
                    <Route exact path="/course-style-1" name="Course Style 1" element={<CourseStyle1 />} />
                    <Route exact path="/course-style-2" name="Course Style 2" element={<CourseStyle2 />} />
                    <Route exact path="/course-style-3" name="Course Style 3" element={<CourseStyle3 />} />
                    <Route exact path="/course-style-4" name="Course Style 4" element={<CourseStyle4 />} />
                    <Route exact path="/course-style-5" name="Course Style 5" element={<CourseStyle5 />} />

                    <Route exact path="*" name="404" element={<ErrorPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default MyApp;
