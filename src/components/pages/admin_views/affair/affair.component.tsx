import React, { useEffect, useState } from 'react';
import {
   Button,
   Card,
   CardBody,
   CardFooter,
   CardHeader,
   Col,
   Container,
   FormGroup,
   Input,
   Modal,
   Row,
   Table
} from 'reactstrap';
import { Affair } from 'shared/utils/interfaces';
import { affairService } from 'services';
import TableLoaderComponent from 'components/ui/common/table-loader/table-loader.component';


const AffairComponent = () => {
   const [toggleDialog, setToggleDialog] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [affairs, setAffairs] = useState<Affair[]>([]);
   // const reducer = catalogReducer<Affair>();
   // const [affairs, dispatch] = useReducer(reducer, []);

   /*const handleChange = (event: HTMLEvent)=>{
      const { name, value } = event.target;
      setDescriptiveRecord( values =>({
        ...values,
        [name]: value
      }));
   }*/

   useEffect(() => {
      affairService.list()
       .then(response => {
         setIsLoading(false);
         setAffairs(response.entities);
       })
       .catch(error => console.log(error));
   }, []);

   const openDialog = (update: boolean = false, id?: string) => {
      setToggleDialog(true);

      if (update) {
      } 
   }

   const saveEntity = () => {

   }

   const onCancel = () => {
      setToggleDialog(false);
   }

   return (
      <>
         <Container className=" mt--7" fluid>
            <Row>
               <div className=" col">
                  <Card className="shadow border-0">
                     <CardHeader className="border-0">
                        <Row className="align-items-center">
                           <div className="col">
                              <h3 className="mb-0">Lista de Tipos de Asuntos</h3>
                           </div>
                           <div className="col text-right">
                              <Button
                               className="btn-icon btn-3"
                               color="primary"
                               size="sm"
                               onClick={() => openDialog()}
                              >
                                 <span className="btn-inner--icon">
                                    <i className="bx bx-plus" />
                                 </span>
                                 <span className="btn-inner--text">Agregar</span>
                              </Button>
                           </div>
                        </Row>
                     </CardHeader>
                     <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                           <tr>
                              <th scope="col">No.</th>
                              <th scope="col">Tipo de asunto</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              !isLoading ? (affairs.map((a, index) => {
                                 return<tr key={a.id}>
                                          <th scope="row">{index + 1}</th>
                                          <th scope="row">{a.affair}</th>
                                       </tr>
                              }))
                              : (<TableLoaderComponent />)
                           }
                           
                        </tbody>
                     </Table>
                  </Card>
               </div>
            </Row>
         </Container>
         <Modal
          size="lg"
          isOpen={toggleDialog}
          toggle={() => openDialog()}
          backdrop='static'
         >
            <div className="modal-body p-0">
               <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white border-0">
                     <Row className="align-items-center">
                        <Col xs="12">
                           <h3 className="mb-0">Nuevo Tipo de Asunto</h3>
                        </Col>
                     </Row>
                  </CardHeader>
                  <CardBody>
                     <Row>
                        <Col lg="12" md="12">
                           <FormGroup>
                              <label className="form-control-label">Nombre del tipo</label>
                              <Input
                               className="form-control-alternative"
                               placeholder="Ingrese un nombre del tipo de asunto..."
                               type="text"
                               autoComplete="off"
                               name="dispositionTitle"
                              />
                           </FormGroup>
                        </Col>
                     </Row>
                  </CardBody>
                  <CardFooter>
                     <Button size="sm" type="button" color="primary" onClick={saveEntity}>Guardar</Button>
                     <Button size="sm" type="button" color="secondary" onClick={onCancel}>Cancelar</Button>
                  </CardFooter>
               </Card>
            </div>
         </Modal>
      </>
   )
}


export default AffairComponent; 