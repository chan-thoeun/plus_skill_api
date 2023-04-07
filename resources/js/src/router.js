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