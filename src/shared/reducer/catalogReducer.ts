import { Model } from "shared/utils/interfaces";

type ActionType = 'add' | 'update' | 'delete' | 'add-list';

interface CatalogAction<T> {
   type: ActionType,
   payload: T | T[] | number;
}

export const catalogReducer = <T extends Model>() => (state: T[] = [], action: CatalogAction<T>): T[] => {
   switch (action.type) {
      case 'add-list':
         return  [...state].concat(...action.payload as T[]);
      case 'add':
         return [...state, action.payload as T];
      case 'delete':
         return state.filter(s => s.id !== action.payload as number);
      default:
         return state;
   }
}