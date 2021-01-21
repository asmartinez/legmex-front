import React, { useEffect } from 'react';
import {
   Card,
   CardBody,
   Container,
   Row
} from 'reactstrap';
//const api = require('zotero-api-client');

const Dashboard = () => {
   /*useEffect(() => {
      async function anyNameFunction() {
         const response = await api().library('user', 7277480).collections('DRUATBZK').items().get();
         const items = response.getData();
         console.log(items.map((i: any) => i.title));
      }
      
      anyNameFunction();
   }, [])*/
   return (
      <>
         <Container className=" mt--7" fluid>
            <Row>
               <div className=" col">
                  <Card>
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