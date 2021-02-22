import axios from 'axios';
import { useState, useEffect } from 'react';
import { ListResponse, SearchOptions } from 'shared/utils/interfaces';

/**
    * 
    * @param root 
    * @param search 
    *  * **Example:**
    * 
    * ```ts
    * export const MyComponent = () => {
    *    const { entities, loading, error } = useList<DescriptiveRecord[]>('search', { search: 'engine' } );
    *    ...
    * }
    * ```
    */
/*export const useList = <T>(root: string, search?: SearchOptions): ListResponse<T> => {
   const params: string[] = [];

   if (search) {
      const { globalText, fields } = search;
      params.push(`?search=${globalText}`);
      params.push(fields ? `&fields=${fields}` : '');
   }

   const uri = `${process.env.REACT_APP_API_URL}/v1/${root}/${params.length > 0 ? params.toString() : ''}`;

   const [fetchedData, setFetchedData] = useState<ListResponse<T>>({
      entities: [],
      loading: true,
      error: ''
   });

   useEffect(() => {
      const fetchData = async (): Promise<void> => {
         try {
            const { data } = await axios.get<T[]>(uri);

            setFetchedData({
               entities: data,
               loading: false,
               error: ''
            });
         }
         catch {
            setFetchedData({
               entities: [],
              loading: false,
              error: 'Error'
            });
          }
      };

      fetchData();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return fetchedData; 
}*/

/**
 * 
 * @param root 
 * @param id
 * 
 * **Example:**
 * 
 * ```ts
 * export const MyComponent = () => {
 *    const { entity, loading, error } = useSingle<DescriptiveRecord>('document', 1);
 *    ...
 * }
 * ```
 */
/*export const useSingle = <T>(root: string, id: number): EntityResponse<T> => {
   const uri = `${process.env.REACT_APP_API_URL}/v1/${root}/${id}`;

   const [fetchedData, setFetchedData] = useState<EntityResponse<T>>({
      entity: {} as T,
      loading: true,
      error: ''
   });

   useEffect(() => {
      const fetchData = async (): Promise<void> => {
         try {
            const { data } = await axios.get<T>(uri);

            setFetchedData({
               entity: data,
               loading: false,
               error: ''
            });
         }
         catch {
            setFetchedData({
              entity: {} as T,
              loading: false,
              error: 'Error'
            });
          }
      };

      fetchData();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return fetchedData;
}*/