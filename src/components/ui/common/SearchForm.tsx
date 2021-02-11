import React, { FormEvent, useState } from 'react';
import {
   Button,
   Card,
   Col,
   Form,
   FormGroup,
   Input,
   InputGroup,
   InputGroupAddon,
   InputGroupText,
   Label,
   Row
} from 'reactstrap';
import { useForm } from 'shared/hooks/useForm';
import { Search } from 'shared/utils/interfaces';
interface IFormSearch {
   onSubmit(search: Search): void
}

const initialStateSearch: Search = {
   searchText: '',
   fields: ''
}

const styleAdvancedSearch = {
   height: '200px',
   top: '-12px'
}

const styleClose = {
   top: '60px'
}

const backgroundInputGroup = {
   background: 'White'
}

const SearchForm = ({ onSubmit }: IFormSearch) => {
   const { values, handleInputChange } = useForm<Search>(initialStateSearch);
   const [active, setActive] = useState(false);

   const { searchText } = values;
   
   const handleSearch = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(values);
   }

   const handleActive = () => {
      setActive(!active);
   }

   return (
      <Form role="form" onSubmit={handleSearch}>
         <FormGroup>
            <InputGroup className="input-group-alternative mb-4" style={backgroundInputGroup}>
               <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                     <i className="bx bx-search-alt"/>
                  </InputGroupText>
               </InputGroupAddon>
                  <Input
                   className="form-control-alternative"
                   placeholder="Search"
                   autoComplete="off"
                   name="searchText"
                   value={ searchText }
                   onChange={ handleInputChange }
                   type="text"/>
                  <Button
                   type="submit"
                   className="btn btn-light-primary btn-sm btn-search"
                   disabled={ !searchText || searchText.length < 3}>
                     Buscar
                  </Button>
            </InputGroup>    
         </FormGroup>
         { !active &&
            <div style={{marginTop: '-22px', textAlignLast: 'center'}}>
               <Button
                type="button"
                className="btn btn-light-primary btn-sm"
                onClick={handleActive}>
                  Búsqueda avanzada
               </Button>
            </div>
         }
         { active &&
            <Card className="border-0" style={styleAdvancedSearch}>
               <Row className="justify-content-center m-3">
                  <label>Limitar Búsqueda</label>
                  <Col xl={12} md={12} xs={12}>
                     <FormGroup check inline>
                        <Label check>
                           <Input type="checkbox" /> Lugar
                        </Label>
                     </FormGroup>
                     <FormGroup check inline>
                        <Label check>
                           <Input type="checkbox" /> Texto
                        </Label>
                     </FormGroup>
                     <FormGroup check inline>
                        <Label check>
                           <Input type="checkbox" /> Asunto
                        </Label>
                     </FormGroup>
                     <FormGroup check inline>
                        <Label check>
                           <Input type="checkbox" /> Titulo
                        </Label>
                     </FormGroup>
                     <FormGroup check inline>
                        <Label check>
                           <Input type="checkbox" /> No. de Disposición
                        </Label>
                     </FormGroup>
                  </Col>
               </Row>
               <Button
                type="button"
                className="btn btn-light-primary btn-sm"
                onClick={handleActive}
                style={styleClose}>
                  Cerrar
               </Button>
            </Card>
         }
      </Form>
   )
}

export default React.memo(SearchForm);