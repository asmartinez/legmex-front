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
import { ActionModal, Affair, FormEventHTML } from 'shared/utils/interfaces';
import { affairService } from 'services';
import TableLoaderComponent from 'components/ui/common/table-loader/table-loader.component';
import { catalogReducer } from 'shared/reducer/catalogReducer';
import { useForm } from 'shared/hooks/useForm';
import SwalAlert from 'sweetalert2';


const AffairComponent = () => {
   const [toggleDialog, setToggleDialog] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [typeActionModal, setTypeActionModal] = useState<ActionModal>('create');
   const { values, setValues, handleInputChange, reset } = useForm<Affair>({
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

   const openDialog = (update: boolean = false, affair?: Affair) => {
      reset();
      if (update) {
         setValues(affair as Affair);
         setTypeActionModal('edit');
      }
      setToggleDialog(true);
   }

   const handleSubmit = (event: FormEventHTML) => {
      event.preventDefault();
      if (typeActionModal === 'create') {
         affairService.store(values)
          .then(response => {
            dispatch({
               type: 'add',
               payload: response
            });
            reset();
            onCancel();
            SwalAlert.fire({
               position: 'center',
               icon: 'success',
               title: 'Guardado correctamente',
               showConfirmButton: false,
               timer: 1500
            });
          })
          .catch(error => console.log(error));
      } else {
         affairService.update(values.id as number, values)
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
               position: 'center',
               icon: 'success',
               title: 'Actualizado correctamente',
               showConfirmButton: false,
               timer: 1500
            });
          })
          .catch(error => console.log(error));
      }
   }

   const handleDelete = (documentId: number) => {
      SwalAlert.fire({
         title: 'Desea eliminar el registro',
         icon: 'error',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Confirmar'
       }).then((result) => {
         if (result.isConfirmed) {
            affairService.delete(documentId)
            .then(response => {
               dispatch({
                  type: 'delete',
                  payload: documentId
               });
               SwalAlert.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Eliminado correctamente',
                  showConfirmButton: false,
                  timer: 1500
               })
            })
            .catch(error => console.log(error));
         }
       })
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
                                                    onClick={() => openDialog(true, a)}>
                                                      Editar
                                                   </DropdownItem>
                                                   <DropdownItem
                                                    onClick={ () => handleDelete(a.id as number)}>
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
                              <h3 className="mb-0">{ typeActionModal === 'create' ? 'Nuevo' : 'Editar' } Tipo de Asunto</h3>
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
                                  required
                                 />
                              </FormGroup>
                           </Col>
                        </Row>
                     </CardBody>
                     <CardFooter className="t-center">
                        <Button size="sm" type="button" color="secondary" onClick={onCancel}>Cancelar</Button>
                        <Button size="sm" type="submit" color="primary">Guardar</Button>
                     </CardFooter>
                  </Card>
               </Form>
            </div>
         </Modal>
      </>
   )
}


export default AffairComponent; 