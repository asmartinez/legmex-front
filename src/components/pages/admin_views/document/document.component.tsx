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
import { Document } from 'shared/utils/interfaces';
import { documentService } from 'services';
import { catalogReducer } from 'shared/reducer/catalogReducer';
import TableLoaderComponent from 'components/ui/common/table-loader/table-loader.component';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { useStyles } from 'shared/hooks/useStyle';
import Editor from 'components/ui/common/editor/editor.component';
import { DropzoneComponent, DropzoneComponentConfig, DropzoneComponentHandlers } from 'react-dropzone-component';
import 'react-dropzone-component/styles/filepicker.css';
import 'dropzone/dist/min/dropzone.min.css';
import './document.component.css';
import { useForm } from 'shared/hooks/useForm';
import moment, { Moment } from 'moment';
import 'moment/locale/es';


const getSteps = () => {
   return ['Datos del documento', 'Legislación Original', 'Transcripción de la legislación'];
}
let fileSelected: File;
const handleFile = (file: File) => {
   console.log(file);
   fileSelected = file;
   console.log(fileSelected);
}

const success = (file: any) => console.log('uploaded', file);

const isExceed = (file: File) => {console.log('exced', file)};

const componentConfig: DropzoneComponentConfig = {
   iconFiletypes: ['.pdf'],
   showFiletypeIcon: true,
   postUrl: 'no-url'
};

const djsConfig: Dropzone.DropzoneOptions = {
   autoProcessQueue: false,
   acceptedFiles: 'application/pdf',
   addRemoveLinks: true,
   maxFiles: 1,
}

const eventHandlers: DropzoneComponentHandlers = { 
   addedfile: handleFile,
   success: success,
   maxfilesexceeded: isExceed
}

const DocumentComponent = () => {
   const classes = useStyles();
   const steps = getSteps();
   const reducer = catalogReducer<Document>();
   const [toggleDialog, setToggleDialog] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [activeStep, setActiveStep] = useState(0);
   const [documents, dispatch] = useReducer(reducer, []);
   let { values, setValues, handleInputChange, reset } = useForm<Document>({
      dispositionTitle: '',
      date: '',
      volume: '',
      pageNumbers: 0,
      legislationTranscriptOriginal: '',
      legislationTranscriptCopy: '',
      place: '',
      dispositionNumber: '',
      dispositionTypeId: 0,
      affairId: 0
   });

	const handleTextAreaChange = (newTextAreaValue: string) => {
		values.legislationTranscriptCopy = newTextAreaValue;
	}

   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
   };

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };

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

   const handleChangeDataPicker = (event: Moment | string) => {
      const newDate = event as Moment;
      values.date = moment(newDate).format("DD/MM/YYYY");
   }

   const openDialog = (update: boolean = false, document?: Document) => {
      reset();
      if (update) {
         setValues(document as Document);
      }
      setToggleDialog(true);
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
      setActiveStep(0);
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
                                                    onClick={() => openDialog(true, document)}>
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
                           ? <>
                                 <Col lg="12" md="12">
                                    <FormGroup>
                                       <label className="form-control-label">Título de la disposición</label>
                                       <Input
                                        className="form-control-alternative"
                                        placeholder="Ingrese un título"
                                        type="text"
                                        autoComplete="off"
                                        name="dispositionTitle"
                                        value={values.dispositionTitle}
                                        onChange={handleInputChange}/>
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
                                           value={values.date}
                                           locale="es"
                                           onChange={handleChangeDataPicker}
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
                                         value={values.place}
                                         name="place"
                                         autoComplete="off"
                                         onChange={handleInputChange}/>
                                    </FormGroup>
                                 </Col>
                                 <Col lg="6" md="6">
                                    <FormGroup>
                                       <label className="form-control-label">Volumen</label>
                                       <Input
                                        className="form-control-alternative"
                                        placeholder="Ingrese un volumen"
                                        type="text"
                                        value={values.volume}
                                        name="volume"
                                        autoComplete="off"
                                        onChange={handleInputChange}/>
                                    </FormGroup>
                                 </Col>
                                 <Col lg="6" md="6">
                                    <FormGroup>
                                       <label className="form-control-label">No. de páginas</label>
                                       <Input
                                        className="form-control-alternative"
                                        placeholder="0"
                                        type="number"
                                        value={values.pageNumbers}
                                        name="pageNumbers"
                                        autoComplete="off"
                                        onChange={handleInputChange}/>
                                    </FormGroup>
                                 </Col>
                              </>
                           :
                           (
                              activeStep === 1
                              ?
                                 <Col lg="12" md="12">
                                     <DropzoneComponent
                                      config={componentConfig}
                                      eventHandlers={eventHandlers}
                                      djsConfig={djsConfig}/>
                                 </Col>
                              :
                                 (activeStep === 2) && <Col lg="12" md="12">
                                    <Editor
                                     onChange={handleTextAreaChange}
                                     value={values.legislationTranscriptCopy}/>
                                 </Col>
                           )
                        }
                     </Row>
                  </CardBody>
                  <CardFooter className="t-center">
                     <Button size="md" type="button" color="secondary" onClick={ activeStep === 0 ? onCancel : handleBack }>
                        { activeStep === 0 ? 'Cancelar' : 'Anterior' }
                     </Button>
                     <Button size="md" type="button" color="primary" onClick={ activeStep === steps.length - 1 ? addDocument : handleNext }>
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