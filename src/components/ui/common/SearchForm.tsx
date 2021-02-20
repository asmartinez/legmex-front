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
import { FieldLimitSearch, HTMLEvent, Search } from 'shared/utils/interfaces';
interface IFormSearch {
   onSubmit(search: Search): void
}

const initialStateSearch: Search = {
   searchText: '',
   fields: ''
}

/**
 * Fields for advanced search
 * 
 * `Limitar Busqueda`
 * 
 */
const initialLimitSearch: FieldLimitSearch[] = [
   {
      key: 'dispositionTitle',
      label: 'Título',
      isChecked: false
   },
   {
      key: 'place',
      label: 'Lugar',
      isChecked: false
   },
   {
      key: 'affairId',
      label: 'Asunto',
      isChecked: false
   },
   {
      key: 'legislationTranscriptCopy',
      label: 'Texto',
      isChecked: false
   },
   {
      key: 'dispositionNumber',
      label: 'No. de Disposición',
      isChecked: false
   }
];

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
   const [fieldsLS, setFieldsLS] = useState<FieldLimitSearch[]>(initialLimitSearch);

   const { searchText } = values;
   
   const handleSearch = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const fields = fieldsLS.filter(f => f.isChecked).map(f => f.key).toString();
      values.fields = fields;
      onSubmit(values);
   }

   const handleActive = () => {
      setActive(!active);
   }

   const handleChange = (event: HTMLEvent) => {
      const { name, checked } = event.target;

      const newFieldLimit = fieldsLS.map(field => {
         if (field.key === name)
            field.isChecked = checked;
         return field
      })

      setFieldsLS(newFieldLimit);
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
                onClick={ handleActive }>
                  Búsqueda avanzada
               </Button>
            </div>
         }
         { active &&
            <Card className="border-0" style={styleAdvancedSearch}>
               <Row className="justify-content-center m-3">
                  <label>Limitar Búsqueda</label>
                  <Col xl={12} md={12} xs={12}>
                     {
                        fieldsLS.map((field, index) => {
                           return <FormGroup check inline key={index}>
                                    <Label check>
                                       <Input
                                        type="checkbox"
                                        name={field.key}
                                        value={field.key}
                                        checked={field.isChecked}
                                        onChange={ handleChange }/>
                                        {field.label}
                                    </Label>
                                 </FormGroup>
                        })
                     }
                  </Col>
               </Row>
               <Button
                type="button"
                className="btn btn-light-primary btn-sm"
                onClick={ handleActive }
                style={styleClose}>
                  Cerrar
               </Button>
            </Card>
         }
      </Form>
   )
}

export default React.memo(SearchForm);