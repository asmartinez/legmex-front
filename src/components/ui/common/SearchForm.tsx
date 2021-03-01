import React, { FormEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
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
import { FieldLimitSearch, HTMLEvent, SearchOptions } from 'shared/utils/interfaces';
interface IFormSearch {
   onSubmit(search: SearchOptions): void
}

const initialStateSearch: SearchOptions = {
   globalText: '',
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
   const { values, handleInputChange } = useForm<SearchOptions>(initialStateSearch);
   const [active, setActive] = useState(false);
   const [fieldsLS, setFieldsLS] = useState<FieldLimitSearch[]>(initialLimitSearch);

   const { globalText } = values;

   const location = useLocation();
   const { q = '', fields = ''} = queryString.parse(location.search);

   useEffect(() => {
      if (fields && fields.length > 0) {
         const fd = fields as string;
         setFieldsLS(fieldsLS.map(f => 
            (fd.split(',').includes(f.key))
            ? { ...f, isChecked: true }
            : f
         ));
      }

      if (q) values.globalText = q as string;
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   
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
                   name="globalText"
                   value={ globalText }
                   onChange={ handleInputChange }
                   type="text"/>
                  <Button
                   type="submit"
                   className="btn btn-light-primary btn-sm btn-search"
                   disabled={ !globalText || globalText.length < 3}>
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