import React, { useEffect, useReducer, useState } from 'react';
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
   InputGroup,
   InputGroupAddon,
   InputGroupText,
   Modal,
   Row,
   Table
} from 'reactstrap';
import ReactDatetime from 'react-datetime';
import { Moment } from 'moment';
import { Document, HTMLEvent } from 'shared/utils/interfaces';
import { documentService } from 'services';
import { catalogReducer } from 'shared/reducer/catalogReducer';
import TableLoaderComponent from 'components/ui/common/table-loader/table-loader.component';

const DocumentComponent = () => {
   const [toggleDialog, setToggleDialog] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const reducer = catalogReducer<Document>();
   const [documents, dispatch] = useReducer(reducer, []);

   /*const handleChange = (event: HTMLEvent)=>{
      const { name, value } = event.target;
      setDescriptiveRecord( values =>({
        ...values,
        [name]: value
      }));
   }*/

   useEffect(() => {
      documentService.list()
       .then(response => {
         setIsLoading(false);
         dispatch({
            type: 'add-list',
            payload: response.entities
         });
       })
       .catch(error => console.log(error));
   }, []);

   /*const handleChangeDataPicker = (event: Moment | string) => {
      descriptiveRecord.date = event.toString();
      setDescriptiveRecord( prevState =>({
         ...prevState
      }));
   }*/

   const openDialog = (update: boolean = false, id?: string) => {
      setToggleDialog(true);

      if (update) {

      } 
   }

   const onCancel = () => {
      setToggleDialog(false);
   }

   const addDocument = () => {
      /*descriptiveRecord.id = 1
      setDescriptiveRecords([
         ...descriptiveRecords,
         descriptiveRecord,
      ]);
      setDescriptiveRecord(initDescriptiveRecord);*/
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
                              <h3 className="mb-0">Lista de documentos</h3>
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
                              <th scope="col">Título</th>
                              <th scope="col">Fecha</th>
                              <th scope="col">Volumen</th>
                              <th scope="col">Paginas</th>
                              <th scope="col">Opciones</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              !isLoading ? (documents.map(document => {
                                 return <tr key={document.id}>
                                    <th scope="row">{document.dispositionTitle}</th>
                                    <td>{document.date}</td>
                                    <td>{document.volume}</td>
                                    <td>{document.pageNumbers}</td>
                                    <td></td>
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
          className="modal-dialog-centered"
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
                           <h3 className="mb-0">Nuevo documento</h3>
                        </Col>
                     </Row>
                  </CardHeader>
                  <CardBody>
                     {/*<Row>
                        <Col lg="12" md="12">
                           <FormGroup>
                              <label className="form-control-label">Título de la disposición</label>
                              <Input
                               className="form-control-alternative"
                               placeholder="Ingrese un título"
                               type="text"
                               autoComplete="off"
                               onChange={handleChange}
                               name="dispositionTitle"
                               value={descriptiveRecord.dispositionTitle}
                              />
                           </FormGroup>
                        </Col>
                        <Col lg="6" md="6">
                           <FormGroup>
                              <label className="form-control-label">Fecha</label>
                              <InputGroup className="input-group-alternative">
                                 <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                       <i className="ni ni-calendar-grid-58" />
                                    </InputGroupText>
                                 </InputGroupAddon>
                                 <ReactDatetime
                                  inputProps={{
                                    placeholder: "Seleccione una fecha"
                                  }}
                                  timeFormat={false}
                                  onChange={handleChangeDataPicker}              
                                  value={descriptiveRecord.date}
                                 />
                              </InputGroup>
                           </FormGroup>
                        </Col>
                        <Col lg="6" md="6">
                           <FormGroup>
                              <label className="form-control-label">Lugar</label>
                              <Input
                               className="form-control-alternative"
                               placeholder="Ingrese el lugar"
                               type="text"
                               onChange={handleChange}
                               name="place"
                               value={descriptiveRecord.place}
                               autoComplete="off"
                              />
                           </FormGroup>
                        </Col>
                        <Col lg="6" md="6">
                           <FormGroup>
                              <label className="form-control-label">Volumen</label>
                              <Input
                               className="form-control-alternative"
                               placeholder="Ingrese un volumen"
                               type="text"
                               onChange={handleChange}
                               name="volume"
                               value={descriptiveRecord.volume}
                               autoComplete="off"
                              />
                           </FormGroup>
                        </Col>
                        <Col lg="6" md="6">
                           <FormGroup>
                              <label className="form-control-label">No. de páginas</label>
                              <Input
                               className="form-control-alternative"
                               placeholder="0"
                               type="number"
                               onChange={handleChange}
                               name="pageNumbers"
                               value={descriptiveRecord.pageNumbers}
                               autoComplete="off"
                              />
                           </FormGroup>
                        </Col>
                        <Col lg="12" md="12">
                           <FormGroup>
                              <label className="form-control-label">Transcripción de la legislación</label>
                              <Input
                               className="form-control-alternative"
                               placeholder="Ingrese todos los datos de la transcripción"
                               rows="4"
                               type="textarea"
                               onChange={handleChange}
                               autoComplete="off"
                               name="legislationTranscript"
                               value={descriptiveRecord.legislationTranscriptOriginal}
                              />
                           </FormGroup>
                        </Col>
                     </Row>*/}
                  </CardBody>
                  <CardFooter>
                     <Button size="sm" type="button" color="primary" onClick={addDocument}>Guardar</Button>
                     <Button size="sm" type="button" color="secondary" onClick={onCancel}>Cancelar</Button>
                  </CardFooter>
               </Card>
            </div>
         </Modal>
      </>
   )
}


export default DocumentComponent; 