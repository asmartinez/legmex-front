import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { DropdownItem, DropdownMenu, DropdownToggle, Media, UncontrolledDropdown } from 'reactstrap';
import profile from '../../assets/img/profile.svg';

const DropdownProfile = () => {
   const history = useHistory();

   const handleLogout = () => {
      history.replace('/auth');
   }

   return (
      <UncontrolledDropdown nav className='profile-icon'>
         <DropdownToggle className="pr-0" nav>
            <Media className="align-items-center">
               <span className="avatar avatar-sm rounded-circle">
                  <img alt="..." src={profile}/>
               </span>
            </Media>
         </DropdownToggle>
         <DropdownMenu className="dropdown-menu-arrow" right>
            <DropdownItem className="noti-title" header tag="div">
               <h6 className="text-overflow m-0">Bienvenido!</h6>
            </DropdownItem>
            <DropdownItem to="/admin/user-profile" tag={Link}>
               <i className="bx bx-user" />
               <span>Mi perfil</span>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={handleLogout}>
               <i className="bx bx-log-out" />
               <span>Cerrar sesión</span>
            </DropdownItem>
         </DropdownMenu>
      </UncontrolledDropdown>
   )
}

export default DropdownProfile;