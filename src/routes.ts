import { RouteCustom } from "./shared/interfaces";
import Dashboard from './app/components/Dashboard'; 
import Land from './app/components/Admin/Admin';
import Page from './app/components/Auth/Auth';


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
      label: 'Land',
      iconType: 'bx',
      iconName: 'category',
      layout: '/admin',
      routerLink: '/land',
      component: Land
   }, 
   {
      label: 'Page',
      iconType: 'bx',
      iconName: 'category',
      layout: '/admin',
      routerLink: '/page',
      component: Page
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