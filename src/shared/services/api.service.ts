import axios, { AxiosRequestConfig } from 'axios';
import { ListResponse, Model, SearchOptions } from 'shared/utils/interfaces';

export default abstract class ApiService<T extends Model> {
   private readonly api: string = '/api';

   public abstract root(): string;

   /**
   * This getter takes the default `api` const string (on top of this class) and the
   * `root()` to create the api uri to make requests.
   * @internal
   */
   protected get uri(): string {
      return `${process.env.REACT_APP_API_URL}/${this.root()}/`;
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
         const { globalText, fields, disposition } = search;
         if (globalText) {
            params.push(`?search=${globalText}`);

            if (fields) {
               params.push(`&fields=${fields}`);
            }

            if (disposition) {
               params.push(`&disposition=${disposition}`);
            }
         }
      }
   
      try {

         const { data } = await axios.get<T[]>(`${this.uri}${params.reduce((prev, current) => prev + current, '')}`);
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

   public storeFormData =  async (form: FormData): Promise<T> => {
      try {
         const config: AxiosRequestConfig = {
            headers: {
               'content-type': 'multipart/form-data'
            }
         }
         const { data } = await axios.post<T>(this.uri, form, config);
         return data;
      }
      catch {
         return {} as T;
      }
   }

   public update = async (id: number, entity: T): Promise<T> => {
      try {
         const { data } = await axios.put<T>(`${this.uri}${id}`, entity);
         return data;
      }
      catch {
         return {} as T;
      }
   }

   public delete = async (id: number): Promise<T> => {
      try {
         const { data } = await axios.delete<T>(`${this.uri}${id}`);
         return data;
      }
      catch {
         return {} as T;
      }
   }
}