import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DropdownItem, DropdownMenu, DropdownToggle, Media, UncontrolledDropdown } from 'reactstrap';
import { AuthContext } from 'shared/context/AuthContext';
import { authenticationService } from 'shared/services/authentication.service';
import profile from '../../assets/img/profile.svg';

const DropdownProfile = () => {
   const { authData, dispatch } = useContext(AuthContext);
   const history = useHistory();

   const handleLogout = () => {
      authenticationService.logout(authData.access_token || '').then(response => {
         dispatch({
            type: 'logout'
         });
         history.replace('/auth');
      });
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
               <h6 className="text-overflow m-0">Bienvenido { authData?.user?.username }!</h6>
            </DropdownItem>
            {/*<DropdownItem to="/admin/user-profile" tag={Link}>
               <i className="bx bx-user" />
               <span>Mi perfil</span>
            </DropdownItem>*/}
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