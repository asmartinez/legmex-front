export interface RouteCustom {
   path?: string;
   name?: string;
   component?: React.FC;
   icon: string;
   layout: '/admin' | '/auth' | 'public';
}