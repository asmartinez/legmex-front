import React from 'react';
import logo from '../../../assets/img/logooficial.svg';

const Header = () => {
   return (
      <>
         <header className='header-custom' id="header">
            <div className='icon-toggle'>
               <i className='bx bx-menu' id="icon_toggle"></i>
            </div>
            <div className='logo-dashboard'>
               <img alt="" src={logo}/>
            </div>
         </header>
      </>
   );
}

export default Header;