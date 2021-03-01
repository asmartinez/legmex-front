import React, { useCallback, useEffect, useState } from 'react';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import { DescriptiveRecord, SearchOptions } from 'shared/utils/interfaces';
import { Col, Container, Row } from 'reactstrap';
import SearchForm from '../../ui/common/SearchForm';
import CardSearch from '../../ui/common/CardSearch';
import { descriptiveRecordService } from 'services';
import Loader from 'components/ui/common/Loader';

const SearchScreen = () => {
   const location = useLocation();
   const history = useHistory();
   const { q = '', fields = ''} = queryString.parse(location.search);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [descriptiveRecords, setDescriptiveRecords] = useState<DescriptiveRecord[]>([]);


   const getDescriptiveRecord = (search: SearchOptions) => {
      descriptiveRecordService.list(search).then(response => {
         setDescriptiveRecords(response.entities);
         setIsLoading(false);
      }).catch(error => console.log(error));
   }

   const handleSearch = useCallback(
      (search: SearchOptions) => {
         const searchByFields = `&fields=${search.fields}`;
         history.push(`/public/search?q=${search.globalText}${ search.fields && search.fields.length > 0 ? searchByFields : '' }`);
         getDescriptiveRecord(search);
      },
      [history]
   );

   useEffect(() => {
      if (q){
         const search: SearchOptions = {
            globalText: q as string,
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
            { isLoading
               ?
                  (<Loader />)
               :
                  (descriptiveRecords.map(descriptiveRecord => {
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
                  }))
            }
         </Container>
      </>
   )
}

export default SearchScreen;