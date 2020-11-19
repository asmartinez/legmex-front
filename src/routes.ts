import { RouteCustom } from "./shared/interfaces";
import Dashboard from './app/components/Dashboard';

const routes: Array<RouteCustom> = [
   {
      label: 'Dashboard',
      iconType: 'bx',
      iconName: 'category',
      layout: '/admin',
      routerLink: '/dashboard',
      component: Dashboard
   },
   {
      label: 'Usuarios',
      iconType: 'bx',
      iconName: 'user',
      layout: '/admin',
      routerLink: '/usuarios'
   }
];

export default routes;