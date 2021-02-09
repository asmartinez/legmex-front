import React, { useCallback, useEffect, useState } from 'react';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import { DescriptiveRecord, Search } from 'shared/utils/interfaces';
import { Col, Container, Row } from 'reactstrap';
import SearchForm from './SearchForm';
import CardSearch from './CardSearch';
import axios from 'axios';
const SearchScreen = () => {
   const location = useLocation();
   const history = useHistory();
   const { q = '', fields = ''} = queryString.parse(location.search);
   const [descriptiveRecords, setDescriptiveRecords] = useState<DescriptiveRecord[]>([]);

   const getDescriptiveRecord = ({ searchText, fields }: Search) => {
      const searchByFields = `&fields=${fields}`;
      axios.get<DescriptiveRecord[]>(`${process.env.REACT_APP_API_URL}/v1/search/?search=${searchText}${fields ? searchByFields: ''}`)
         .then(response => {
            setDescriptiveRecords(response.data);
         })
         .catch(error => console.log(error));
   }

   const handleSearch = useCallback(
      (search: Search) => {
         history.push(`/public/search?q=${search.searchText}`);
         getDescriptiveRecord(search);
      },
      [history]
   )

   useEffect(() => {
      if (q){
         const search: Search = {
            searchText: q as string,
            fields: fields as string
         }
         getDescriptiveRecord(search);
      }

      return () => setDescriptiveRecords([]);
   }, [q, fields]);

   return (
      <>
         <Container>
            <Row className="justify-content-center">
               <Col xl={8} md={8} xs={12}>
                  <SearchForm onSubmit={handleSearch}/>
               </Col>
            </Row>
            {
               descriptiveRecords.map(descriptiveRecord => {
                  return <CardSearch
                           key={ descriptiveRecord.id } 
                           id={ descriptiveRecord.id }
                           dispositionTitle={ descriptiveRecord.dispositionTitle }
                           date={ descriptiveRecord.date }
                           volume= { descriptiveRecord.volume }
                           pageNumbers={ descriptiveRecord.pageNumbers }
                           legislationTranscriptOriginal={ descriptiveRecord.legislationTranscriptOriginal }
                           legislationTranscriptCopy={ descriptiveRecord.legislationTranscriptCopy }
                           place={ descriptiveRecord.place }
                           dispositionNumber= {descriptiveRecord.dispositionNumber}
                           dispositionTypeId={ descriptiveRecord.dispositionTypeId }
                           affairId={ descriptiveRecord.affairId }/>
               })
            }
         </Container>
      </>
   )
}

export default SearchScreen;