import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Sidebar from '../components/ui/Sidebar';
import routes from '../routes';
import { RouteCustom } from '../shared/utils/interfaces';
import { NavLink as NavLinkRRD } from "react-router-dom";
import { Col, Container, NavLink, Row } from 'reactstrap';

const publicRoutes =  routes.filter( route => route.layout === '/public' );

const PublicRoutes = (props: any) => {
   const getRoutes = (routes: Array<RouteCustom>) => {
      return routes.map( (route, key) => {
         return (
            <Route
             path={route.layout + route.routerLink}
             component={route.component}
             key={key}
            />
         );
      });
   };

   return (
      <>
         <Container>
            <Row>
               <Col xl={10} md={9} xs={10}></Col>
               <Col xl={2} md={3} xs={6}>
                  <NavLink
                   className="btn btn-light-primary btn-sm"
                   to="/auth"
                   tag={NavLinkRRD}
                   id="login12">
                     <i className="bx bx-log-in"/>
                     <span className="nav__name">Administrador</span>
                  </NavLink>
               </Col>
            </Row>
         </Container>
         <div className="main-content">
            <Sidebar backgroundOption="white" items={publicRoutes} isFooterCard showTitle/>
            <Switch>
               {getRoutes(routes)}
               <Redirect from="*" to="/public/inicio"/>
            </Switch>
         </div>
      </>
   )
}

export default PublicRoutes;