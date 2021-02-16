import Starter from '../views/starter/starter.jsx';
import NotFound from '../views/404.jsx';
import Signin from '../views/auth/signin.jsx';

var ThemeRoutes = [
  {
    path: '/dashboard',
    name: 'Home',
    icon: 'ti-home',
    component: Starter,
    protected: true,
  },
  {
    path: '/campaigns',
    name: 'Campaigns',
    icon: 'ti-announcement',
    component: Starter,
    protected: true,
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Starter,
    hidden: true,
    exact: true,
    protected: true,
  },
  {
    path: '/auth/signin',
    name: 'Signin',
    component: Signin,
    hidden: true,
    exact: true,
  },
  {
    path: '/404',
    name: 'Not Found',
    icon: 'mdi mdi-image-filter-vintage',
    hidden: true,
    public: true,
    component: NotFound,
  },
  {
    pathTo: '/404',
    name: 'Not Found',
    redirect: true,
  },
];

export default ThemeRoutes;
