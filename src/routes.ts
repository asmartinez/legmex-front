import { RouteCustom } from "./shared/utils/interfaces";
import Dashboard from './components/pages/admin_views/Dashboard';
import Users from './components/pages/admin_views/Users';
import Inicio from "./components/pages/public_views/Inicio";
import Registry from "./components/pages/admin_views/Registry/Registry";

const routes: Array<RouteCustom> = [
   {
      label: 'Inicio',
      iconType: 'bx',
      iconName: 'category',
      layout: '/public',
      routerLink: '/inicio',
      component: Inicio
   },
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
      iconName: 'users',
      layout: '/admin',
      routerLink: '/users',
      component: Users
   },
   {
      label: 'Registros',
      iconType: 'bx',
      iconName: 'users',
      layout: '/admin',
      routerLink: '/registry',
      component: Registry
   }
];

export default routes;