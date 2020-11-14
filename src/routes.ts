import { RouteCustom } from "./shared/interfaces";
import Dashboard from './app/components/Dashboard';

const routes: Array<RouteCustom> = [
   {
      path: '/dashboard',
      name: 'Dashboard',
      icon: 'ni ni-tv-2 text-primary',
      layout: '/admin',
      component: Dashboard
   }
];

export default routes;