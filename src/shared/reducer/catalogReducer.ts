type ActionType = 'add' | 'update' | 'delete';

interface CatalogAction<T> {
   type: ActionType,
   payload: T;
}

export const catalogReducer = <T>() => (state: T[] = [], action: CatalogAction<T>): T[] => {
   switch (action.type) {
      case 'add':
         return [...state, action.payload];
      case 'delete':
         return state.filter(s => !(action.payload in s));
      default:
         return state;
   }
}