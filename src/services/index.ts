import { AffairService } from './affair.service';
import { DispositionTypeService } from './disposition-type.service';
import { DocumentService } from './document.service';

export const documentService = new DocumentService();
export const affairService = new AffairService();
export const dispositionTypeService = new DispositionTypeService();