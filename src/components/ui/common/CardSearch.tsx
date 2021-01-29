import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { DescriptiveRecord } from '../../../shared/utils/interfaces';
import Badge from './Badge';

const styleCard = {
   height: '95px',
   overflow: 'hidden',
}

const CardSearch = (item: DescriptiveRecord) => {
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
                        <Badge title="Disposición No:" value="2305"/>
                        <Badge title="Tipo de Disposición:" value="Decreto"/>
                        <Badge title="Lugar:" value={ item.place }/>
                        <Badge title="Fecha:" value={ item.date }/>
                        <Badge title="Vol:" value={ item.volume }/>
                        <Badge title="Páginas:" value={ item.pageNumbers }/>
                     </div>
                     <p className="description mt-3" style={styleCard}>
                        { item.legislationTranscriptCopy }
                     </p>
                     <div>
                        <a href={`${process.env.REACT_APP_API_URL}${item.legislationTranscriptOriginal}`}>
                           Ver Legislación Original
                        </a>
                     </div>
                  </CardBody>
               </Card>
            </Col>
         </Row> 
      </>
   )
}

export default CardSearch;