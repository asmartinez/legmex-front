import { Model } from "shared/utils/interfaces";

type Add<T> = {
   type: 'add';
   payload: T;
}

type Update<T> = {
   type: 'update';
   payload: { id: number, data: T };
}

type Delete = {
   type: 'delete';
   payload: number;
}

type AddList<T> = {
   type: 'add-list';
   payload: T[];
}

type CatalogAction<T> = Add<T> | Update<T> | Delete | AddList<T>;

export const catalogReducer = <T extends Model>() => (state: T[] = [], action: CatalogAction<T>): T[] => {
   switch (action.type) {
      case 'add-list':
         return  [...state].concat(...action.payload);
      case 'add':
         return [...state, action.payload];
      case 'update':
         return state.map((s)=>{
            if(s.id === action.payload.id) {
               s = action.payload.data;
              return s;
            }
            return s;
          });
      case 'delete':
         return state.filter(s => s.id !== action.payload);
      default:
         return state;
   }
}