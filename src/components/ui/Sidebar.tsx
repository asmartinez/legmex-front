import React from 'react';
import { NavLink as NavLinkRRD } from "react-router-dom";
import { NavLink } from 'reactstrap';
import { RouteCustom, SidebarCustom } from '../../shared/utils/interfaces';
import logo from '../../assets/img/logooficial.svg';

const SidebarItem = (route: RouteCustom) => {
   return (
      <NavLink
       className="nav__link"
       to={route.layout + route.routerLink}
       tag={NavLinkRRD}
       activeClassName="active"
       id={route.iconName+route.label}
      >
         <i className={`${route.iconType} ${route.iconType}-${route.iconName} nav__icon`}/>
         <span className="nav__name">{route.label}</span>
      </NavLink>
   );
};

const Sidebar = (sidebarCustom: SidebarCustom) => {

   const { items } = sidebarCustom;
   
   return (
      <>
         <div className="lateral-nav" id="navbar">
            <nav className="navbar__custom">
               <div>
                  <div className="nav__brand">
                     <img src={logo} className="nav__logo" alt="..." />
                  </div>
                  <div className="nav__list">
                     {
                        items.map( (item,index) => {
                           const { label, iconType, iconName, layout, routerLink } = item;
                           
                           return <SidebarItem
                                 key={index}
                                 label={label}
                                 iconName={iconName}
                                 iconType={iconType}
                                 layout={layout}
                                 routerLink={routerLink}
                                 />
                        })
                     }
                  </div>
               </div>
               <div className="footer-line">
                  <a href="https://biblioteca.colmex.mx/" className="nav__footer">© 2020 Biblioteca Daniel Cosío Villegas. </a>
                  <span className="span__footer">El Colegio de México A.C.</span>
               </div>
            </nav>
         </div>
         <div id="backdrop"></div>
      </>
   )
}

export default Sidebar;