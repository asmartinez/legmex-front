import { RouteCustom } from "./shared/utils/interfaces";
import Dashboard from './components/pages/admin_views/Dashboard';
import Index from "./components/pages/public_views/Index";
import Descriptive from "./components/pages/admin_views/Descriptive/Descriptive";
import AffairComponent from "components/pages/admin_views/affair/affair.component";

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
   },
   {
      label: 'Guía de uso',
      iconType: 'bx',
      iconName: 'carousel',
      layout: '/public',
      routerLink: '/guia_de_uso',
   },
   {
      label: 'Volúmenes',
      iconType: 'bx',
      iconName: 'library',
      layout: '/public',
      routerLink: '/volumenes',
   },
   {
      label: 'Tipos de documentos',
      iconType: 'bx',
      iconName: 'blanket',
      layout: '/public',
      routerLink: '/tipos_de_documentos',
   },
   {
      label: 'Asuntos',
      iconType: 'bx',
      iconName: 'outline',
      layout: '/public',
      routerLink: '/asuntos',
   },
   {
      label: 'Descargar Corpus',
      iconType: 'bx',
      iconName: 'book-bookmark',
      layout: '/public',
      routerLink: '/corpus',
   },
   {
      label: 'Publicaciones',
      iconType: 'bx',
      iconName: 'book-reader',
      layout: '/public',
      routerLink: '/publicaciones'
   },
   {
      label: 'Contacto',
      iconType: 'bx',
      iconName: 'envelope',
      layout: '/public',
      routerLink: '/contacto'
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
      label: 'Documentos',
      iconType: 'bx',
      iconName: 'bookmarks',
      layout: '/admin',
      routerLink: '/descriptives',
      component: Descriptive
   },
   {
      label: 'Asuntos',
      iconType: 'bx',
      iconName: 'bookmarks',
      layout: '/admin',
      routerLink: '/affair',
      component: AffairComponent
   },
   /*{
      label: 'Colecciones',
      iconType: 'bx',
      iconName: 'collection',
      layout: '/admin',
      routerLink: '/panel',
   },*/
   {
      label: 'Usuarios',
      iconType: 'bx',
      iconName: 'user',
      layout: '/admin',
      routerLink: '/users'
   }
];

export default routes;