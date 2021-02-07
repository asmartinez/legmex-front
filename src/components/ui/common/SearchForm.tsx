import React, { FormEvent } from 'react';
import {
   Button,
   Form,
   FormGroup,
   Input,
   InputGroup,
   InputGroupAddon,
   InputGroupText
} from 'reactstrap';
import { useForm } from 'shared/hooks/useForm';
import { Search } from 'shared/utils/interfaces';
interface IFormSearch {
   onSubmit: Function
}

const SearchForm = ({ onSubmit }: IFormSearch) => {
   const { values, handleInputChange } = useForm<Search>({
      searchText: ''
   });

   const { searchText } = values;
   
   const handleSearch = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit({searchText})
   }

   return (
      <Form role="form" onSubmit={handleSearch}>
         <FormGroup>
            <InputGroup className="input-group-alternative mb-4" style={{background: 'White'}}>
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
         <div style={{marginTop: '-22px', textAlignLast: 'center'}}>
            <Button
             type="button"
             className="btn btn-light-primary btn-sm">
               Búsqueda avanzada
            </Button>
         </div>
      </Form>
   )
}

export default React.memo(SearchForm);