import React from 'react';
import { NavLink as NavLinkRRD } from "react-router-dom";
import { NavLink } from 'reactstrap';
import { RouteCustom, SidebarCustom } from '../../shared/utils/interfaces';
import logo from '../../assets/img/logooficial.svg';
import FooterCard from './FooterCard';
import FooterLine from './FooterLine';

const SidebarItem = (route: RouteCustom) => {
   return (
      <NavLink
       className="nav__link"
       to={route.layout + route.routerLink}
       tag={NavLinkRRD}
       activeClassName="active"
       id={route.iconName+route.label}>
         <i className={`${route.iconType} ${route.iconType}-${route.iconName} nav__icon`}/>
         <span className="nav__name">{route.label}</span>
      </NavLink>
   );
};

const Sidebar = (sidebarCustom: SidebarCustom) => {

   const { items, backgroundOption, isFooterCard, showTitle } = sidebarCustom;
   
   return (
      <>
         <div className={`lateral-nav ${backgroundOption}-bg`} id="navbar">
            <nav className="navbar__custom">
               <div>
                  <div className={`nav__brand ${showTitle ? 'm-b-1' : 'm-b-2'}`}>
                     <img src={logo} className={showTitle ? 'wth-100' : 'wth-193'} alt="..." />
                  </div>
                  {
                     showTitle && 
                     (
                        <div>
                           <h4 className="t-center l-height">LEGISLACIÓN MEXICANA</h4>
                           <h5 className="t-center l-height">o</h5>
                           <h6 className="t-justify m-b-30 ">Colección completa de las disposiciones legislativas expedidas desde la independencia</h6>
                        </div>
                     )
                  }
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
                           routerLink={routerLink}/>
                        })
                     }
                  </div>
               </div>
               { isFooterCard ? <FooterCard/> : <FooterLine/> }
            </nav>
         </div>
         <div id="backdrop"></div>
      </>
   )
}

export default Sidebar;