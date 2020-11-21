import { RouteCustom } from "./shared/interfaces";
import Dashboard from './app/components/Dashboard'; 
import Land from './app/components/Admin/Admin';
import Page from './app/components/Auth/Auth';


import Users from './app/components/Views/Users';

const routes: Array<RouteCustom> = [ 
   {
      label: 'Land',
      iconType: 'bx',
      iconName: 'category',
      layout: '/public',
      routerLink: '/land',
      component: Land
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
      label: 'Page',
      iconType: 'bx',
      iconName: 'category',
      layout: '/admin',
      routerLink: '/page',
      component: Page
   }, 
   {
      label: 'Users',
      iconType: 'bx',
      iconName: 'users',
      layout: '/admin',
      routerLink: '/users',
      component: Users
   }, 
];

export default routes;