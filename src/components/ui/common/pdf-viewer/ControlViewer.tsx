import React from 'react';
import { Button, Card, Col, Row } from 'reactstrap';
import { IControlViewer } from 'shared/utils/interfaces';

const style = {
   height: '64px',
   width: '610px',
   top: '-12px'
}

const ControlViewer = (item: IControlViewer) => {
   const { pageNumber, numberPages, setPageNumber } = item;
   
   return (
      <>
         <Card className="border-0" style={style}>
            <Row className="justify-content-center m-3">
               <Col xl={12} md={12} xs={12}>
                  <Button className="btn-icon btn-2" color="primary" type="button" size="sm">
                     <span className="btn-inner--icon">
                        <i className="bx bx-chevron-left" />
                     </span>
                  </Button>
                  <Button className="btn-icon btn-2" color="primary" type="button" size="sm">
                     <span className="btn-inner--icon">
                        <i className="bx bx-chevron-right" />
                     </span>
                  </Button>
                  <p>Página { pageNumber } de { numberPages }</p>
               </Col>
            </Row>
         </Card>
      </>
   )
}

export default ControlViewer;