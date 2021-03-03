import ApiService from 'shared/services/api.service';
import { DispositionType } from 'shared/utils/interfaces';

export class DispositionTypeService extends ApiService<DispositionType> {
   public root(): string {
      return 'disposition';
   }
}