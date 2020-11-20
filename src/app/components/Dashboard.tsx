import React from 'react';
import { Card, CardBody, CardHeader, Container, Row } from 'reactstrap';

const Dashboard = () => {
   return (
      <>
      <h1     
       className ="title">Legislación Mexicana</h1>
      <input 
      className ="form-control"  
      style={{backgroundColor:"#fffff",
      width:"50%",marginLeft:"24%", 
      marginTop:"2%"}}
      /><i className="fas fa-search"
      style={{backgroundColor:"#e8e9e823",
      marginLeft:"48%", 
      marginTop:"2%"}}></i>
      </>
   )
}


export default Dashboard; 