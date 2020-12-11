import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { DropdownItem, DropdownMenu, DropdownToggle, Media, UncontrolledDropdown } from 'reactstrap';
import profile from '../../assets/img/profile.svg';

const DropdownProfile = () => {
   const history = useHistory();
 
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
            <DropdownItem to="/auth" tag={Link}>
               <i className="ni ni-single-02" />
               <span>Iniciar sesión</span>
            </DropdownItem> 
         </DropdownMenu>
      </UncontrolledDropdown>
   )
}

export default DropdownProfile;