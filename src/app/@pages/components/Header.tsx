import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'reactstrap';
import DropdownProfile from './DropdownProfile';
import logo from '../../../assets/img/logooficial.svg';
import { useWindowSize } from 'react-use';

const Header = () => {
   const [toggle, setToggle] = useState<boolean>(false);

   const { width } = useWindowSize();

   const displayNone = width < 768;

   const showSidebar = () => {
      toggle ? setToggle(false) : setToggle(true);   
   }

   useEffect( () => {
      const nav = document.getElementById('navbar');
      const backdrop = document.getElementById('backdrop');
      const backdropActive = document.querySelector('.backdrop');

      if (toggle) {
         backdrop?.classList.add('backdrop');
         nav?.classList.add('show-sidebar');
      }

      backdropActive?.addEventListener('click', function() {
         nav?.classList.remove('show-sidebar');
         backdrop?.classList.remove('backdrop');
      })

      return () => {
         setToggle(false);
      }
   }, [toggle])

   return (
      <>
         {/* Desktop and Mobile Header */}
         <Navbar className={ displayNone ? 'navbar-vertical fixed-left navbar-light bg-white' : 'navbar-top' }  expand="md" id="navbar-main">
            <Container fluid>
               <button className="navbar-toggler" type="button" onClick={showSidebar}>
                  <span className="navbar-toggler-icon"/>
               </button>
               { !displayNone && <span className="h4 mb-0 text-uppercase d-none d-lg-inline-block"> Dashboard </span> }
               { displayNone && <img className="navbar-brand-img" src={logo} alt="..."/> }
               <Nav className={`align-items-center ${displayNone ? 'd-md-flex' : ''}`} navbar={!displayNone}>
                  <DropdownProfile />
               </Nav>
            </Container>
         </Navbar>
      </>
   );
}

export default Header;