
import ApiService from 'shared/services/second.api.service';
import { DescriptiveRecord } from 'shared/utils/interfaces';

export class DescriptiveRecordService extends ApiService<DescriptiveRecord> {
   public root(): string {
      return 'document';
   }
}