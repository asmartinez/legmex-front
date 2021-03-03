import React, { useEffect, useReducer, useState } from 'react';
import {
   Button,
   Card,
   CardBody,
   CardFooter,
   CardHeader,
   Col,
   Container,
   DropdownItem,
   DropdownMenu,
   DropdownToggle,
   Form,
   FormGroup,
   Input,
   Modal,
   Row,
   Table,
   UncontrolledDropdown
} from 'reactstrap';
import { Affair, FormEventHTML } from 'shared/utils/interfaces';
import { affairService } from 'services';
import TableLoaderComponent from 'components/ui/common/table-loader/table-loader.component';
import { catalogReducer } from 'shared/reducer/catalogReducer';
import { useForm } from 'shared/hooks/useForm';


const AffairComponent = () => {
   const [toggleDialog, setToggleDialog] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const { values, handleInputChange, reset } = useForm<Affair>({
      affair: ''
   });
   const reducer = catalogReducer<Affair>();
   const [affairs, dispatch] = useReducer(reducer, []);

   useEffect(() => {
      affairService.list()
       .then(response => {
         setIsLoading(false);
         dispatch({
            type: 'add-list',
            payload: response.entities
         });
       })
       .catch(error => console.log(error));
   }, []);

   const openDialog = (update: boolean = false, id?: string) => {
      setToggleDialog(!toggleDialog);
   }

   const handleSubmit = (event: FormEventHTML) => {
      event.preventDefault();
      dispatch({
         type: 'add',
         payload: values
      });
      reset();
      onCancel();
   }

   const handleDelete = (data: Affair) => {
      dispatch({
         type: 'delete',
         payload: data
      });
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
                              <th className="text-right">Opciones</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              !isLoading ? (affairs.map((a, index) => {
                                 return<tr key={a.id}>
                                          <td>{index + 1}</td>
                                          <td>{a.affair}</td>
                                          <td className="text-right">
                                             <UncontrolledDropdown>
                                                <DropdownToggle
                                                 className="btn-icon-only text-light"
                                                 href="_blank"
                                                 role="button"
                                                 size="sm"
                                                 color=""
                                                 onClick={e => e.preventDefault()}>
                                                <i className="fas fa-ellipsis-v" />
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                   <DropdownItem
                                                    onClick={e => e.preventDefault()}>
                                                      Editar
                                                   </DropdownItem>
                                                   <DropdownItem
                                                    onClick={ () => handleDelete(a)}>
                                                      Borrar
                                                   </DropdownItem>
                                                </DropdownMenu>
                                             </UncontrolledDropdown>
                                          </td>
                                       </tr>
                              }))
                              : (<TableLoaderComponent colNumber={3} rowNumber={9}/>)
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
          backdrop='static'>
            <div className="modal-body p-0">
            <Form role="form" onSubmit={handleSubmit}>
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
                               name="affair"
                               value={values.affair}
                               onChange={handleInputChange}
                              />
                           </FormGroup>
                        </Col>
                     </Row>
                  </CardBody>
                  <CardFooter>
                     <Button size="sm" type="submit" color="primary">Guardar</Button>
                     <Button size="sm" type="button" color="secondary" onClick={onCancel}>Cancelar</Button>
                  </CardFooter>
               </Card>
               </Form>
            </div>
         </Modal>
      </>
   )
}


export default AffairComponent; 