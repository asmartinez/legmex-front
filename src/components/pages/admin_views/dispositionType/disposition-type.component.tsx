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
import { ActionModal, DispositionType, FormEventHTML } from 'shared/utils/interfaces';
import { dispositionTypeService } from 'services';
import TableLoaderComponent from 'components/ui/common/table-loader/table-loader.component';
import { catalogReducer } from 'shared/reducer/catalogReducer';
import { useForm } from 'shared/hooks/useForm';
import SwalAlert from 'sweetalert2'

const DispositionTypeComponent = () => {
   const [toggleDialog, setToggleDialog] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [typeActionModal, setTypeActionModal] = useState<ActionModal>('create');
   const reducer = catalogReducer<DispositionType>();
   const [dispositionTypes, dispatch] = useReducer(reducer, []);
   const { values, setValues, handleInputChange, reset } = useForm<DispositionType>({
      dispositionType: '',
      /*clave: 0*/
   });

   useEffect(() => {
      dispositionTypeService.list()
       .then(response => {
         setIsLoading(false);
         dispatch({
            type: 'add-list',
            payload: response.entities
         });
       })
       .catch(error => console.log(error));
   }, []);

   const openDialog = (update: boolean = false, disposition?: DispositionType) => {
      reset();
      if (update) {
         setValues(disposition as DispositionType);
         setTypeActionModal('edit');
      }
      setToggleDialog(true);
   }

   const handleSubmit = (event: FormEventHTML) => {
      event.preventDefault();

      if (typeActionModal === 'create') {
         dispositionTypeService.store(values)
          .then(response => {
            dispatch({
               type: 'add',
               payload: response
            });
            reset();
            onCancel();
          })
          .catch(error => console.log(error));
      } else {
         dispositionTypeService.update(values.id as number, values)
          .then(response => {
            dispatch({
               type: 'update',
               payload: {
                  id: values.id as number,
                  data: response
               }
            });
            reset();
            onCancel();
            SwalAlert.fire({
               title: 'Oops',
               text: 'Correcto',
               showCancelButton: false,
               confirmButtonText: 'Aceptar',
               width: '23em',
               allowOutsideClick: false,
               allowEscapeKey: false
            }).then((result) => {
            });
          })
          .catch(error => {
          });
      }
   }

   const handleDelete = (dispositionTypeId: number) => {
      dispositionTypeService.delete(dispositionTypeId)
      .then(response => {
         dispatch({
            type: 'delete',
            payload: dispositionTypeId
         });
      })
      .catch(error => console.log(error));
   }

   const onCancel = () => {
      setToggleDialog(false);
      setTypeActionModal('create');
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
                              <th scope="col">Nombre del Tipo de Disposición</th>
                              {/*<th scope="col">Número de control</th>*/}
                              <th className="text-right">Opciones</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              !isLoading ? (dispositionTypes.map((disposition, index) => {
                                 return<tr key={disposition.id}>
                                          <td>{index + 1}</td>
                                          <td>{disposition.dispositionType}</td>
                                          {/*<td>{disposition.clave}</td>*/}
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
                                                    onClick={() => openDialog(true, disposition)}>
                                                      Editar
                                                   </DropdownItem>
                                                   <DropdownItem
                                                    onClick={ () => handleDelete(disposition.id as number) }>
                                                      Borrar
                                                   </DropdownItem>
                                                </DropdownMenu>
                                             </UncontrolledDropdown>
                                          </td>
                                       </tr>
                              }))
                              : (<TableLoaderComponent colNumber={4} rowNumber={9}/>)
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
                                  placeholder="Ingrese un nombre del tipo de disposición..."
                                  type="text"
                                  autoComplete="off"
                                  name="dispositionType"
                                  value={values.dispositionType}
                                  onChange={handleInputChange}
                                  required
                                 />
                              </FormGroup>
                           </Col>
                        {/*<Col lg="6" md="6">
                              <FormGroup>
                                 <label className="form-control-label">Número de control</label>
                                 <Input
                                  className="form-control-alternative"
                                  placeholder="Ingrese un nombre del tipo de disposición..."
                                  type="number"
                                  autoComplete="off"
                                  name="clave"
                                  value={values.clave}
                                  onChange={handleInputChange}
                                  required
                                  min={1}
                                  max={9}
                                 />
                              </FormGroup>
                           </Col>*/}
                        </Row>
                     </CardBody>
                     <CardFooter className="t-center">
                        <Button size="md" type="button" color="secondary" onClick={onCancel}>Cancelar</Button>
                        <Button size="md" type="submit" color="primary">Guardar</Button>
                     </CardFooter>
                  </Card>
               </Form>
            </div>
         </Modal>
      </>
   )
}


export default DispositionTypeComponent; 