import React, { useEffect } from 'react';
import FormLogin from './FormLogin';
import ForgetPassword from './ForgetPassword'; 
import './auth.css';
import imgSession from '../../assets/img/image-session.svg';
import imgFP from '../../assets/img/image-forget-password.svg';


const Auth = (props: any) => {
   useEffect( () => {
      document.body.style.padding = '0';
      return () => {
         document.body.style.padding = '';
      };
   }, []);

   return (
      <div className="container-login">
         <div className="forms-container">
            <div className="signin-forget-password">
               <FormLogin />
               <ForgetPassword /> 
            </div>
         </div>
         <div className="panels-container">
            <div className="panel left-panel">
               <img src={imgSession} className="image" alt="" />
            </div>
            <div className="panel right-panel">
               <img src={imgFP} className="image" alt="" />
            </div>
         </div>
      </div>
   )
}

export default Auth;