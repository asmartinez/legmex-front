import axios from 'axios';
import { ListResponse, SearchOptions } from 'shared/utils/interfaces';

export abstract class ApiService<T> {
   private readonly api: string = '/v1';

   public abstract root(): string;

   protected get uri(): string {
      return `${process.env.REACT_APP_API_URL}/${this.root()}`;
   }
   
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
   public list = async (search?: SearchOptions): Promise<ListResponse<T>> => {
      const params: string[] = [];
   
      if (search) {
         const { globalText, fields } = search;
         params.push(`?search=${globalText}`);
         params.push(fields ? `&fields=${fields}` : '');
      }
   
      const uri = `${process.env.REACT_APP_API_URL}/v1/${''}/${params.length > 0 ? params.toString() : ''}`;
   
      try {
         const { data } = await axios.get<T[]>(uri);
   
         return {
            entities: data
         };
      }
      catch {
         return {
            entities: []
         };
      }
   }

   /*public single = async (id: number): Promise<EntityResponse<T>> => {
      const uri = `${process.env.REACT_APP_API_URL}/v1/${''}/${id}`;
      try {
         const { data } = await axios.get<T>(uri);
   
         return {
            entity: data,
            loading: false,
            error: ''
         };
      }
      catch {
         return {
            entity: {} as T,
            loading: false,
            error: 'Error'
         };
      }
   }*/
}