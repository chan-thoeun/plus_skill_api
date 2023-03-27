import HomeMain from './pages';

import ProfileTeacher from './pages/partner/profile-teacher';
// import CourseStyle1 from '../components/course-style-1';
// import CourseStyle2 from '../components/course-style-2';
// import CourseStyle3 from '../components/course-style-3';
// import CourseStyle4 from '../components/course-style-4';
// import CourseStyle5 from '../components/course-style-5';

const routes = [
	{ path: '/', exact: true, name: 'HomeMain', element: HomeMain },
    // Teacher
    { path: '/profile-teacher', exact: true, name: 'Profile Teacher', element: ProfileTeacher },

]
export default routes;

                    // {/* routes component */}
                    // {/* <PrivateRoute>
                    //     <Route exact path="/course-style-1" name="Course Style 1" element={<CourseStyle1 />} />
                    //     <Route exact path="/course-style-2" name="Course Style 2" element={<CourseStyle2 />} />
                    //     <Route exact path="/course-style-3" name="Course Style 3" element={<CourseStyle3 />} />
                    //     <Route exact path="/course-style-4" name="Course Style 4" element={<CourseStyle4 />} />
                    //     <Route exact path="/course-style-5" name="Course Style 5" element={<CourseStyle5 />} />
                    // </PrivateRoute> */}
                    
                    // <Route exact path