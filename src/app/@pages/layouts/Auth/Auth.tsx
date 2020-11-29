import React, { useEffect } from 'react';
import FormLogin from './FormLogin';
import ForgetPassword from './ForgetPassword';
import './auth.css';
import imgSession from '../../../../assets/img/image-session.svg';
import imgFP from '../../../../assets/img/image-forget-password.svg';


const Auth = (props: any) => {

   const forget_mode = document.getElementById("forget-mode");
   const sign_mode = document.getElementById("sign-mode");
   const container_login = document.querySelector(".container-login");

   useEffect( () => {
      document.body.style.padding = '0';
      
      if (sign_mode && forget_mode && container_login) {
         forget_mode.addEventListener("click", () => {
            container_login.classList.toggle("forget-mode");
         });
      }
      
   }, [container_login, sign_mode, forget_mode]);

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