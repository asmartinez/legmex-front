
import ApiService from 'shared/services/api.service';
import { Document } from 'shared/utils/interfaces';

export class DocumentService extends ApiService<Document> {
   public root(): string {
      return 'document';
   }

   public getDocumentPDF(filename: string): string {
      return `${process.env.REACT_APP_API_URL}${filename}`
   }
}