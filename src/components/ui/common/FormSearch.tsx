import React from 'react';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { useForm } from '../../../shared/hooks/useForm';
import { FSearch, Search } from '../../../shared/utils/interfaces';

const FormSearch = (fsearch: FSearch) => {
   const { values, handleInputChange } = useForm<Search>({
      searchText: ''
   });

   const { searchText } = values;
   return (
      <>
      <Form role="form" onSubmit={fsearch.handleSearch}>
                     <FormGroup>
                        <InputGroup className="input-group-alternative mb-4">
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
                            className="btn btn-light-primary btn-sm"
                            disabled={ !searchText || searchText.length < 3}>
                              Buscar
                           </Button>
                        </InputGroup>    
                     </FormGroup>
                     <div style={{marginTop: '-22px', textAlignLast: 'center'}}>
                        <Button
                         type="button"
                         className="btn btn-light-primary btn-sm">
                           Búsqueda avanzada
                        </Button>
                     </div>
                  </Form>
      </>
   )
}

export default FormSearch;