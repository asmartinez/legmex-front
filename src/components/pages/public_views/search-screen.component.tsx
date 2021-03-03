import React, { useCallback, useEffect, useState } from 'react';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import { Document, SearchOptions } from 'shared/utils/interfaces';
import { Col, Container, Row } from 'reactstrap';
import SearchForm from '../../ui/common/SearchForm';
import CardSearch from '../../ui/common/CardSearch';
import { documentService } from 'services';
import Loader from 'components/ui/common/Loader';

const SearchScreen = () => {
   const location = useLocation();
   const history = useHistory();
   const { q = '', fields = ''} = queryString.parse(location.search);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [documents, setDocuments] = useState<Document[]>([]);


   const getDescriptiveRecord = (search: SearchOptions) => {
      documentService.list(search).then(response => {
         setDocuments(response.entities);
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

      return () => setDocuments([]);
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
                  (documents.map(document => {
                     return <CardSearch
                              key={ document.id } 
                              id={ document.id }
                              dispositionTitle={ document.dispositionTitle }
                              date={ document.date }
                              volume= { document.volume }
                              pageNumbers={ document.pageNumbers }
                              legislationTranscriptOriginal={ document.legislationTranscriptOriginal }
                              legislationTranscriptCopy={ document.legislationTranscriptCopy }
                              place={ document.place }
                              dispositionNumber= {document.dispositionNumber}
                              dispositionTypeId={ document.dispositionTypeId }
                              affairId={ document.affairId }/>
                  }))
            }
         </Container>
      </>
   )
}

export default SearchScreen;