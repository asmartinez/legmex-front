export interface User {
   username: string;
}
export interface AuthState {
   user?: User;
   logged: boolean;
}

type AuthAction = {
   type: 'login' | 'logout',
   payload: AuthState
};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
   switch (action.type) {
      case 'login':
         return {
            ...action.payload,
            logged: true
         } as AuthState;

      case 'logout':
         return {
            logged: false
         } as AuthState;

      default:
         return state;
   }
}