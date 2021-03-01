
import ApiService from 'shared/services/api.service';
import { DescriptiveRecord } from 'shared/utils/interfaces';

export class DescriptiveRecordService extends ApiService<DescriptiveRecord> {
   public root(): string {
      return 'document';
   }

   public getDocumentPDF(filename: string): string {
      return `${process.env.REACT_APP_API_URL}${filename}`
   }
}