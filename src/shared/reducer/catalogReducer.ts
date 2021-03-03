type ActionType = 'add' | 'update' | 'delete' | 'add-list';

interface CatalogAction<T> {
   type: ActionType,
   payload: T | T[];
}

export const catalogReducer = <T>() => (state: T[] = [], action: CatalogAction<T>): T[] => {
   switch (action.type) {
      case 'add-list':
         return  [...state].concat(...action.payload as T[]);
      case 'add':
         return [...state, action.payload as T];
      case 'delete':
         return state.filter(s => !(action.payload as T in s));
      default:
         return state;
   }
}