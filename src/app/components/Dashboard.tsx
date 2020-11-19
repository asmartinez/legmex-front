import React from 'react';
import { Card, CardBody, CardHeader, Container, Row } from 'reactstrap';

const Dashboard = () => {
   return (
      <>
      <Container className=" mt--7" fluid>
         <Row>
            <div className=" col">
               <Card className=" shadow">
                  <CardHeader className=" bg-transparent">
                     <h3 className=" mb-0">Dashboard</h3>
                  </CardHeader>
                  <CardBody>
                  </CardBody>
               </Card>
            </div>
         </Row>
      </Container>
      </>
   )
}


export default Dashboard;