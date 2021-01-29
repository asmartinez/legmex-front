import axios from 'axios';
import { GenericResponse } from './generic-response';

export default class ApiService {
   private static baseURL: string = 'http://localhost:4000';
   private readonly api: string = '/api';

   public static async getAll<T>(url: string): Promise<GenericResponse<T>> {
      const response = await axios.get<Array<T>>(this.baseURL + url)
         .then( response => {
            return new GenericResponse<T>(true,<Array<T>> response.data, 'success', "")
         })
         .catch( error => {
            return new GenericResponse<T>(true, [], 'error', error)
         });
      return response;
   }
}