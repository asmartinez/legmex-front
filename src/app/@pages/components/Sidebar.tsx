import React, { useEffect } from 'react';
import { NavLink as NavLinkRRD } from "react-router-dom";
import { NavLink, UncontrolledTooltip } from 'reactstrap';
import { RouteCustom, SidebarCustom } from '../../../shared/interfaces';
import DropdownProfile from './DropdownProfile';
import icon from '../../../assets/img/iconmini.svg';

const SidebarItem = (route: RouteCustom) => {
   return (
      <NavLink
       className='navbar-link'
       to={route.layout + route.routerLink}
       tag={NavLinkRRD}
       activeClassName='active'
       id={route.iconName+route.label}
      >
         <i className={`${route.iconType} ${route.iconType}-${route.iconName} navbar-link-icon`}/>
         {/*<span className='navbar-link-name'>{route.label}</span>*/}
         <UncontrolledTooltip
          delay={0}
          placement="right"
          target={route.iconName+route.label}
         >
            {route.label}
         </UncontrolledTooltip>
      </NavLink>
   );
};

const Sidebar = (sidebarCustom: SidebarCustom) => {

   const { layoutOption, items, logout } = sidebarCustom;

   const showNavBar = (toggleId: string, navId: string, bodyId: string, headerId: string) => {
      const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);
   
      //validate that all variables exist
      if (toggle && nav && bodypd && headerpd) {
         toggle.addEventListener('click', () => {
            //show navbar
            nav.classList.toggle('show-sidebar');
            //change icon
            toggle.classList.toggle('bx-x');
            //add padding to body
            bodypd.classList.toggle('body-pd');
            //add padding to header
            headerpd.classList.toggle('body-pd');
         })
      }
   }

   useEffect( () => {
      showNavBar('icon_toggle','navbar','body-pd','header');
   });
   
   return (
      <div className={`navbar-vertical sidebar-navbar s-${layoutOption}`} id='navbar'>
         <nav className='nav-custom'>
            <div>
               <img alt='...' src={icon} className='w-170'/>
               <div className='navbar-links'>
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
            { logout && <DropdownProfile />}
         </nav>
      </div>
   )
}

export default Sidebar;