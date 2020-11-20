import { RouteCustom } from "./shared/interfaces";
import Dashboard from './app/components/Dashboard';
import Login from './app/components/FormLogin';
import Land from './app/components/Admin/Admin';
import Page from './app/components/Auth/Auth';


const routes: Array<RouteCustom> = [
   {
      path: '/dashboard',
      name: 'Dashboard',
      icon: 'ni ni-tv-2 text-primary',
      layout: '/admin',
      component: Dashboard
   },
   {
      path: '/login',
      name: 'Login',
      icon: 'ni ni-tv-2 text-primary',
      layout: '/admin',
      component: Login
   },
   {
      path: '/page',
      name: 'Page',
      icon: 'ni ni-tv-2 text-primary',
      layout: '/admin',
      component: Page
   },
   {
      path: '/land',
      name: 'Land',
      icon: 'ni ni-tv-2 text-primary',
      layout: '/admin',
      component: Land
   },
];

export default routes;