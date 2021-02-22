import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import ApiService from 'shared/services/api.service';
import { DescriptiveRecord } from 'shared/utils/interfaces';
import Badge from './Badge';
import EditorViewer from './editor-viewer/EditorViewer';
import PDFViewer from './pdf-viewer/PDFViewer';

const DispositionScreen = () => {
   const { dispositionId }: any = useParams();

   const [descriptiveRecord, setDescriptiveRecord] = useState<DescriptiveRecord>();
   const [tabIndex, setTabIndex] = useState<number>(1);

   const toggleNavs = (e: { preventDefault: () => void; }, state: any, index: any) => {
      e.preventDefault();
      setTabIndex(index);
   };

   useEffect(() => {
      ApiService.single<DescriptiveRecord>('document', dispositionId)
       .then(response => setDescriptiveRecord(response))
       .catch(error => console.log(error));
   }, [dispositionId]);

   if (!dispositionId) {
      <Redirect to="public/inicio" />
   }

   if (!descriptiveRecord) {
      return null;
   }

   return (
      <>
         <Container>
            <Row className="justify-content-end">
               <Col xl={3} md={3} xs={12}>
                  <Card>
                     <CardBody>
                        <h4 className="h3 text-uppercase">{ descriptiveRecord.dispositionTitle }</h4>
                        <Row className="justify-content-center">
                           <Col xl={12} md={12} xs={12}>
                              <Badge title="Disposición No:" value={ descriptiveRecord.dispositionTitle }/>
                           </Col>
                           <Col xl={12} md={12} xs={12}>
                              <Badge title="Tipo de Disposición:" value="Decreto"/>
                           </Col>
                           <Col xl={12} md={12} xs={12}>
                              <Badge title="Lugar:" value={ descriptiveRecord.place }/>
                           </Col>
                           <Col xl={12} md={12} xs={12}>
                              <Badge title="Fecha:" value={ descriptiveRecord.date }/>
                           </Col>
                           <Col xl={12} md={12} xs={12}>
                              <Badge title="Volumen:" value={ descriptiveRecord.volume }/>
                           </Col>
                           <Col xl={12} md={12} xs={12}>
                              <Badge title="Páginas:" value={ descriptiveRecord.pageNumbers }/>
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
                           role="tablist"
                        >
                           <NavItem>
                              <NavLink
                              aria-selected={tabIndex === 1}
                              className={classnames("mb-sm-3 mb-md-0", {
                                 active: tabIndex === 1
                              })}
                              onClick={e => toggleNavs(e, "navPills", 1)}
                              role="tab"
                              >
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
                              role="tab"
                              >
                              Legislación Copia
                              </NavLink>
                           </NavItem>
                        </Nav>
                        <TabContent activeTab={"tabs" + tabIndex}>
                           <TabPane tabId="tabs1">
                              <PDFViewer path={descriptiveRecord.legislationTranscriptOriginal}/>
                           </TabPane>
                           <TabPane tabId="tabs2">
                              <EditorViewer text={descriptiveRecord.legislationTranscriptCopy}/>;
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

export default DispositionScreen;