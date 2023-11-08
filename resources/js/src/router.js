import HomeMain from './pages';

import Account from './pages/partner/Profile';
import EditProfile from './components/profile/EditProfile';

const routes = [
	{ path: '/', exact: true, name: 'HomeMain', element: HomeMain },
    // Teacher
    { path: '/account', exact: true, name: 'Account', element: Account },
    { path: '/edit-account/:id', exact: true, name: 'Edit Account', element: EditProfile },
    // { path: '/dashbaord', exact: true, name: 'Profile Teacher', element: LayoutAdmin },

]
export default routes;