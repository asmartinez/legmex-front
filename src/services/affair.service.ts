import ApiService from 'shared/services/api.service';
import { Affair } from 'shared/utils/interfaces';

export class AffairService extends ApiService<Affair> {
   public root(): string {
      return 'affair';
   }
}