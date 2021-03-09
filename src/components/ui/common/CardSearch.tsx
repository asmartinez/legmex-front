import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Document } from '../../../shared/utils/interfaces';
import Badge from './Badge';

const styleCard = {
   height: '95px',
   overflow: 'hidden',
}

const CardSearch = (item: Document) => {
   return (
      <>
         <Row style={{marginTop: '40px'}}>
            <Col xl={12} md={12} xs={12}>
               <Card className="card-lift--hover shadow">
                  <CardBody>
                     <h4 className="h3 text-uppercase">
                        { item.dispositionTitle }
                     </h4>
                     <div>
                        <Badge title="Disposición No:" value={ item.dispositionNumber } />
                        <Badge title="Tipo de Disposición:" value={ item.dispositionType?.dispositionType || '' } />
                        <Badge title="Asunto:" value={ item.affair?.affair || '' } />
                        <Badge title="Lugar:" value={ item.place } />
                        <Badge title="Fecha:" value={ item.date } />
                        <Badge title="Vol:" value={ item.volume } />
                        <Badge title="Páginas:" value={ item.pageNumbers } />
                     </div>
                     <p className="description mt-3" style={styleCard}>
                        { item.legislationTranscriptCopy }
                     </p>
                     <div>
                        <Link to={`/public/document/${item.id}`}>Leer más</Link>
                     </div>
                  </CardBody>
               </Card>
            </Col>
         </Row> 
      </>
   )
}

export default CardSearch;