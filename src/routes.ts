import { RouteCustom } from "./shared/utils/interfaces";
import Dashboard from './components/pages/admin_views/Dashboard';
import Users from './components/pages/admin_views/Users';
import Index from "./components/pages/public_views/Index";
import Panel from './components/pages/admin_views/Files'; 
import Descriptive from "./components/pages/admin_views/Descriptive/Descriptive";

const routes: Array<RouteCustom> = [
   {
      label: 'Inicio',
      iconType: 'bx',
      iconName: 'home',
      layout: '/public',
      routerLink: '/inicio',
      component: Index
   },
   {
      label: 'Presentación',
      iconType: 'bx',
      iconName: 'slideshow', //spreadsheet
      layout: '/public',
      routerLink: '/presentacion',
      component: Index
   },
   {
      label: 'Guía de uso',
      iconType: 'bx',
      iconName: 'carousel',
      layout: '/public',
      routerLink: '/guia_de_uso',
      component: Index
   },
   {
      label: 'Volúmenes',
      iconType: 'bx',
      iconName: 'library',
      layout: '/public',
      routerLink: '/volumenes',
      component: Index
   },
   {
      label: 'Tipos de documentos',
      iconType: 'bx',
      iconName: 'blanket',
      layout: '/public',
      routerLink: '/tipos_de_documentos',
      component: Index
   },
   {
      label: 'Asuntos',
      iconType: 'bx',
      iconName: 'outline',
      layout: '/public',
      routerLink: '/asuntos',
      component: Index
   },
   {
      label: 'Descargar Corpus',
      iconType: 'bx',
      iconName: 'book-bookmark',
      layout: '/public',
      routerLink: '/corpus',
      component: Index
   },
   {
      label: 'Publicaciones',
      iconType: 'bx',
      iconName: 'book-reader',
      layout: '/public',
      routerLink: '/publicaciones',
      component: Index
   },
   {
      label: 'Contacto',
      iconType: 'bx',
      iconName: 'envelope',
      layout: '/public',
      routerLink: '/contacto',
      component: Index
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
      label: 'Descriptivos',
      iconType: 'bx',
      iconName: 'bookmarks',
      layout: '/admin',
      routerLink: '/descriptives',
      component: Descriptive
   },
   {
      label: 'Colecciones',
      iconType: 'bx',
      iconName: 'collection',
      layout: '/admin',
      routerLink: '/panel',
      component: Panel
   },
   {
      label: 'Usuarios',
      iconType: 'bx',
      iconName: 'user',
      layout: '/admin',
      routerLink: '/users',
      component: Users
   }
];

export default routes;