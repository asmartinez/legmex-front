import React, { useState } from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { RouteCustom } from '../../../shared/interfaces';
import { NavLink as NavLinkRRD } from "react-router-dom";
import logo from '../../../assets/img/logooficial.svg';

const Sidebar = (props: Array<RouteCustom>) => {
   const [collapseOpen, setCollapseOpen] = useState(false);

   const closeCollapse = () => {
      setCollapseOpen(false);
   }; 

   return (
      <Navbar
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
            <NavbarBrand className="pt-0">
              <img
                alt={logo}
                className="navbar-brand-img"
                src={logo}
              />
            </NavbarBrand>
            <Nav navbar>
               <NavItem>
                  <NavLink
                   to='/admin/dashboard'
                   tag={NavLinkRRD}
                   onClick={closeCollapse}
                   activeClassName="active"
                  >
                     <i className='ni ni-tv-2 text-jam' />
                     Dashboard
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink
                   to='/admin/dashboard'
                   tag={NavLinkRRD}
                   onClick={closeCollapse}
                   activeClassName=''
                  >
                     <i className='ni ni-tv-2 text-jam' />
                     Iniciar Sesión
                  </NavLink>
               </NavItem>
            </Nav> 
        </Container>
      </Navbar>  
   )
}

export default Sidebar;