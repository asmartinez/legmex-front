import axios from 'axios';
import { ListResponse, SearchOptions } from 'shared/utils/interfaces';

export default class ApiService {
   public static list = async <T>(root: string, search?: SearchOptions): Promise<ListResponse<T>> => {
      const params: string[] = [];
   
      if (search) {
         const { globalText, fields } = search;
         params.push(`?search=${globalText}`);
         params.push(fields ? `&fields=${fields}` : '');
      }
   
      const uri = `${process.env.REACT_APP_API_URL}/api/${root}/${params.length > 0 ? params.toString() : ''}`;
   
      try {
         const { data } = await axios.get<T[]>(uri);
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

   public static single = async <T>(root: string, id: number): Promise<T> => {
      const uri = `${process.env.REACT_APP_API_URL}/api/${root}/${id}/`;
      try {
         const { data } = await axios.get<T>(uri);
         return data;
      }
      catch {
         return {} as T;
      }
   }

   public static store = async <T>(root: string, entity: T): Promise<T> => {
      const uri = `${process.env.REACT_APP_API_URL}/api/${root}`;
      try {
         const { data } = await axios.post<T>(uri, entity);
         return data;
      }
      catch {
         return {} as T;
      }
   }

   public static update = async <T>(root: string, id: number, entity: T): Promise<T> => {
      const uri = `${process.env.REACT_APP_API_URL}/api/${root}/${id}`;
      try {
         const { data } = await axios.post<T>(uri, entity);
         return data;
      }
      catch {
         return {} as T;
      }
   }

   public static destroy = async <T>(root: string, id: number): Promise<T> => {
      const uri = `${process.env.REACT_APP_API_URL}/api/${root}/${id}`;
      try {
         const { data } = await axios.delete<T>(uri);
         return data;
      }
      catch {
         return {} as T;
      }
   }
}