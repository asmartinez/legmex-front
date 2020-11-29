import { RouteCustom } from "./shared/utils/interfaces";
import Dashboard from './components/pages/Dashboard';

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