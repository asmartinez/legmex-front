import axios from 'axios';
import { ListResponse, SearchOptions } from 'shared/utils/interfaces';

export default abstract class ApiService<T> {
   private readonly api: string = '/api';

   public abstract root(): string;

   /**
   * This getter takes the default `api` const string (on top of this class) and the
   * `root()` to create the api uri to make requests.
   * @internal
   */
   protected get uri(): string {
      return `${process.env.REACT_APP_API_URL}${this.api}/${this.root()}/`;
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
   
      try {
         const { data } = await axios.get<T[]>(`${this.uri}${params.length > 0 ? params.toString() : ''}`);
         return {
            entities: data
         }
      }
      catch {
         return {
            entities: []
         };
      }
   }

   public single = async (id: number): Promise<T> => {
      try {
         const { data } = await axios.get<T>(`${this.uri}${id}/`);
         return data;
      }
      catch {
         return {} as T;
      }
   }

   public store = async (entity: T): Promise<T> => {
      try {
         const { data } = await axios.post<T>(this.uri, entity);
         return data;
      }
      catch {
         return {} as T;
      }
   }

   public update = async (id: number, entity: T): Promise<T> => {
      try {
         const { data } = await axios.post<T>(`${this.uri}${id}`, entity);
         return data;
      }
      catch {
         return {} as T;
      }
   }

   public destroy = async (id: number): Promise<T> => {
      try {
         const { data } = await axios.delete<T>(`${this.uri}${id}`);
         return data;
      }
      catch {
         return {} as T;
      }
   }
}