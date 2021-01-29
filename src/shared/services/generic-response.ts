export class GenericResponse<T> {
   status: boolean;
   entities: T | T[] | null;
   message: string;
   exception: string;

   constructor(status: boolean, entities: T | T[] | null, message: string, exception: string) {
      this.status = status;
      this.entities = entities;
      this.message = message;
      this.exception = exception;
   }
}