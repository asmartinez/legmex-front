import React from 'react';  
import { Button } from 'reactstrap';

const Inicio = () => {
   return (
      <>
      <h1     
       className ="title"  style={{backgroundColor:"#e8e9e823",marginLeft:"35%",color:"#663259",
       marginTop:"2%"}}>Legislación Mexicana</h1>
      <input 
      className ="form-control"  
      style={{backgroundColor:"#ffff",
      width:"50%",marginLeft:"24%", 
      marginTop:"2%" }}
      />
      {/* <i className="fas fa-search"
      style={{backgroundColor:"#e8e9e823",
      marginLeft:"48%", 
      marginTop:"2%"}}></i> */}
      <Button style={{background:'#663259', color:'#fff',marginLeft:"46%", 
      marginTop:"2%"}}>Search</Button> 
      </>
   )
}

export default Inicio;