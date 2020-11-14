import React from 'react';
import './style.css';

const Admin = () => {
   return (
      <>
      <h1     
       className ="title">Legislación Mexicana</h1>
      <input 
      className ="form-control"  
      style={{backgroundColor:"#e8e9e823",
      width:"50%",marginLeft:"24%", 
      marginTop:"2%"}}
      /><i className="fas fa-search"
      style={{backgroundColor:"#e8e9e823",
      marginLeft:"48%", 
      marginTop:"2%"}}></i>
      </>
   )
}

export default Admin;