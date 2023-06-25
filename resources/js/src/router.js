import HomeMain from './pages';

import ProfileTeacher from './pages/partner/profile-teacher';
import LayoutAdmin from './layout/admin';
import EditProfile from './components/profile-teacher/EditProfile';

const routes = [
	{ path: '/', exact: true, name: 'HomeMain', element: HomeMain },
    // Teacher
    { path: '/profile-teacher', exact: true, name: 'Profile Teacher', element: ProfileTeacher },
    { path: '/edit-account/:id', exact: true, name: 'Edit Account', element: EditProfile },
    { path: '/dashbaord', exact: true, name: 'Profile Teacher', element: LayoutAdmin },

]
export default routes;