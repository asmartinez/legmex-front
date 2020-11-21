export interface RouteCustom {
   label: string;
   iconType: 'bx' | 'ni';
   /**
   * See the references for corresponding icon type.
   * @see https://boxicons.com/ for `bx`
   * @see https://demos.creative-tim.com/argon-dashboard-react/?_ga=2.226579357.1613467959.1605477559-291815678.1604883519#/documentation/icons for `ni`
   */
   iconName: string;
   layout: '/admin' | '/auth' | '/public' ;
   routerLink?: string;
   component?: React.FC;
}

export interface SidebarCustom {
   layoutOption: 'default' | 'mini';
   items: Array<RouteCustom>;
   logout?: boolean;
}