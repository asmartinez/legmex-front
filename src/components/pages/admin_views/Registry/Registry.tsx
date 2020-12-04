import React from 'react';
import {
   Button,
   Card,
   CardHeader,
   Container,
   Row,
   Table
} from 'reactstrap';

const Registry = () => {
   return (
      <>
         <Container className=" mt--7" fluid>
            <Row>
               <div className=" col">
                  <Card className="shadow border-0">
                     <CardHeader className="border-0">
                        <Row className="align-items-center">
                           <div className="col">
                              <h3 className="mb-0">Registros</h3>
                           </div>
                           <div className="col text-right">
                              <Button
                               color="primary"
                               href="#pablo"
                               onClick={e => e.preventDefault()}
                               size="sm"
                              >
                                 Nuevo
                              </Button>
                           </div>
                        </Row>
                     </CardHeader>
                     <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                           <tr>
                              <th scope="col">Título</th>
                              <th scope="col">Fecha</th>
                              <th scope="col">Volumen</th>
                              <th scope="col">Paginas</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th scope="row">Título 1</th>
                              <td>8/27/2020</td>
                              <td>Vol. 1</td>
                              <td>50</td>
                           </tr>
                           <tr>
                              <th scope="row">Título 2</th>
                              <td>8/13/2020</td>
                              <td>Vol. 2</td>
                              <td>60</td>
                           </tr>
                           <tr>
                              <th scope="row">Título 3</th>
                              <td>8/19/2020</td>
                              <td>Vol. 4</td>
                              <td>40</td>
                           </tr>
                           <tr>
                              <th scope="row">Título 4</th>
                              <td>8/4/2020</td>
                              <td>Vol. 4</td>
                              <td>100</td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card>
               </div>
            </Row>
         </Container>
      </>
   )
}


export default Registry; 