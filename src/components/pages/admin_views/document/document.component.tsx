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
   FormGroup,
   Input,
   InputGroup,
   InputGroupAddon,
   InputGroupText,
   Modal,
   Row,
   Table,
   UncontrolledDropdown
} from 'reactstrap';
import ReactDatetime from 'react-datetime';
import { Moment } from 'moment';
import { Document, HTMLEvent } from 'shared/utils/interfaces';
import { documentService } from 'services';
import { catalogReducer } from 'shared/reducer/catalogReducer';
import TableLoaderComponent from 'components/ui/common/table-loader/table-loader.component';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import { useStyles } from 'shared/hooks/useStyle';
import { Typography } from '@material-ui/core';

const getSteps = () => {
   return ['Datos del documento', 'Legislación Original', 'Transcripción de la legislación'];
}

function getStepContent(stepIndex: number) {
   switch (stepIndex) {
     case 0:
       return 'Select campaign settings...';
     case 1:
       return 'What is an ad group anyways?';
     case 2:
       return 'This is the bit I really care about!';
     default:
       return 'Unknown stepIndex';
   }
 }

const DocumentComponent = () => {
   const classes = useStyles();
   const steps = getSteps();
   const reducer = catalogReducer<Document>();
   const [toggleDialog, setToggleDialog] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [activeStep, setActiveStep] = useState(0);
   const [documents, dispatch] = useReducer(reducer, []);

   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
   };

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };

   const handleReset = () => {
      setActiveStep(0);
   };

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
                              <th className="text-right">Opciones</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              !isLoading ? (documents.map(document => {
                                 return <tr key={document.id}>
                                          <td>{document.dispositionTitle}</td>
                                          <td>{document.date}</td>
                                          <td>{document.volume}</td>
                                          <td>{document.pageNumbers}</td>
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
                                                    onClick={e => e.preventDefault()}>
                                                      Borrar
                                                   </DropdownItem>
                                                   <DropdownItem
                                                    href={documentService.getDocumentPDF(document.legislationTranscriptOriginal)} download={document.dispositionTitle}>
                                                      Descargar pdf
                                                   </DropdownItem>
                                                </DropdownMenu>
                                             </UncontrolledDropdown>
                                          </td>
                                       </tr>
                              }))
                              : (<TableLoaderComponent colNumber={5} rowNumber={9} />)
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
                           <h3 className="mb-0">Nuevo documento</h3>
                        </Col>
                     </Row>
                  </CardHeader>
                  <CardBody>
                     <div className={classes.root}>
                        <Stepper alternativeLabel activeStep={activeStep}>
                        {steps.map((label) => (
                           <Step key={label}>
                              <StepLabel>{label}</StepLabel>
                           </Step>
                        ))}
                        </Stepper>
                     </div>
                     <Row>
                        {
                           activeStep === 0
                           ? (<>
                              <Col lg="12" md="12">
                              <FormGroup>
                                 <label className="form-control-label">Título de la disposición</label>
                                 <Input
                                  className="form-control-alternative"
                                  placeholder="Ingrese un título"
                                  type="text"
                                  autoComplete="off"
                                  name="dispositionTitle"
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
                                  
                                  name="place"
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
                                  
                                  name="volume"
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
                                  
                                  name="pageNumbers"
                                  autoComplete="off"
                                 />
                              </FormGroup>
                           </Col></>
                           )
                           :(<>f</>)
                        }
                     </Row>
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
                  <CardFooter className="t-center">
                     <Button size="sm" type="button" color="secondary" onClick={ activeStep === 0 ? onCancel : handleBack }>
                        { activeStep === 0 ? 'Cancelar' : 'Anterior' }
                     </Button>
                     <Button size="sm" type="button" color="primary" onClick={ activeStep === steps.length - 1 ? addDocument : handleNext }>
                        { activeStep === steps.length - 1 ? 'Guardar' : 'Siguiente' }
                     </Button>
                  </CardFooter>
               </Card>
            </div>
         </Modal>
      </>
   )
}


export default DocumentComponent;