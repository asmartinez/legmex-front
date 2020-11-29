import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownItem, DropdownMenu, DropdownToggle, Media, UncontrolledDropdown } from 'reactstrap';
import profile from '../../assets/img/profile.svg';

const DropdownProfile = () => {
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
               <i className="ni ni-single-02" />
               <span>Mi perfil</span>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
               <i className="ni ni-user-run" />
               <span>Cerrar sesión</span>
            </DropdownItem>
         </DropdownMenu>
      </UncontrolledDropdown>
   )
}

export default DropdownProfile;