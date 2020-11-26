import React from 'react';
import { Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';  

const Users = () => {
  return ( 
    <Form>    
      <Row form>
          <Col md={4}>
          <FormGroup> 
            <Label for="exampleImage">Imagen</Label>
            <Input type="file" name="file" id="exampleFile"/>
            </FormGroup>
        </Col>  
      </Row> 
      <Row>
      <Col md={4}>
          <FormGroup>
            <Label for="exampleName">Name</Label>
            <Input type="text" name="Name" id="exampleName" placeholder="Enter your name" bsSize="sm"/>
          </FormGroup>
        </Col> 
        <Col md={4}>
          <FormGroup>
            <Label for="exampleBirthday">Birthday</Label>
            <Input type="text" name="Birthday" id="exampleBirthday" placeholder="Enter your birthday" bsSize="sm"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="Email" id="exampleEmail" placeholder= "Enter your email" bsSize="sm"/>
          </FormGroup>
        </Col> 
        <Col md={4}>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input type="text" name="Address" id="exampleAddress" placeholder="Enter your address" bsSize="sm"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleCellphone">Cellphone</Label>
            <Input type="text" name="Cellphone" id="exampleCellphone" placeholder="Enter your phone number" bsSize="sm"/>
          </FormGroup>
        </Col>  
      </Row>
      <Button style={{background:'#663259', color:'#fff'}}>Submit</Button> 
    </Form>
  );
}

export default Users;