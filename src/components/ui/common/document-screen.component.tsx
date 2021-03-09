import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { dispositionTypeService, documentService } from 'services';
import { DispositionType, Document } from 'shared/utils/interfaces';
import Badge from './Badge';
import EditorViewer from './editor-viewer/EditorViewer';
import PDFViewer from './pdf-viewer/PDFViewer';

const DocumentScreen = () => {
   const { documentId }: any = useParams();

   const [document, setDocument] = useState<Document>();
   const [disposition, setDisposition] = useState<DispositionType>();
   const [tabIndex, setTabIndex] = useState<number>(1);

   const toggleNavs = (e: { preventDefault: () => void; }, state: any, index: any) => {
      e.preventDefault();
      setTabIndex(index);
   };

   useEffect(() => {
      documentService.single(documentId)
       .then(response => {
         setDocument(response);
         dispositionTypeService.single(response.dispositionTypeId)
          .then(response => setDisposition(response))
          .catch(error => console.log(error))
       })
       .catch(error => console.log(error));

      
   }, [documentId]);

   if (!documentId) {
      <Redirect to="public/inicio" />
   }

   if (!document) {
      return null;
   }

   return (
      <>
         <Container>
            <Row className="justify-content-end">
               <Col xl={3} md={3} xs={12}>
                  <Card>
                     <CardBody>
                        <h4 className="h3 text-uppercase">{ document.dispositionTitle }</h4>
                        <Row className="justify-content-center">
                           <Col xl={12} md={12} xs={12}>
                              <Badge title="Disposición No:" value={ document.dispositionNumber }/>
                           </Col>
                           <Col xl={12} md={12} xs={12}>
                              <Badge title="Tipo de Disposición:" value={ disposition?.dispositionType || '' }/>
                           </Col>
                           <Col xl={12} md={12} xs={12}>
                              <Badge title="Lugar:" value={ document.place }/>
                           </Col>
                           <Col xl={12} md={12} xs={12}>
                              <Badge title="Fecha:" value={ document.date }/>
                           </Col>
                           <Col xl={12} md={12} xs={12}>
                              <Badge title="Volumen:" value={ document.volume }/>
                           </Col>
                           <Col xl={12} md={12} xs={12}>
                              <Badge title="Páginas:" value={ document.pageNumbers }/>
                           </Col>
                        </Row>
                     </CardBody>
                  </Card>
               </Col>
               <Col xl={9} md={9} xs={12}>
                  <Card className="shadow">
                     <CardBody className="height-86">
                        <Nav
                         className="nav-fill flex-column flex-sm-row"
                         id="tabs-text"
                         pills
                         role="tablist">
                           <NavItem>
                              <NavLink
                               aria-selected={tabIndex === 1}
                               className={classnames("mb-sm-3 mb-md-0", {
                                 active: tabIndex === 1
                               })}
                               onClick={e => toggleNavs(e, "navPills", 1)}
                               role="tab">
                                 Legislación Original
                              </NavLink>
                           </NavItem>
                           <NavItem>
                              <NavLink
                               aria-selected={tabIndex === 2}
                               className={classnames("mb-sm-3 mb-md-0", {
                                  active: tabIndex === 2
                              })}
                               onClick={e => toggleNavs(e, "navPills", 2)}
                               role="tab">
                                 Legislación Copia
                              </NavLink>
                           </NavItem>
                        </Nav>
                        <TabContent activeTab={"tabs" + tabIndex}>
                           <TabPane tabId="tabs1">
                              <PDFViewer path={ document.legislationTranscriptOriginal }/>
                           </TabPane>
                           <TabPane tabId="tabs2">
                              <EditorViewer text={ document.legislationTranscriptCopy }/>
                           </TabPane>
                        </TabContent>
                     </CardBody>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default DocumentScreen;