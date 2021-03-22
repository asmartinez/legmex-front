export interface User {
   username: string;
}

export interface AuthResponse {
   user?: User;
   access_token?: string;
   expires_in?: number;
   token_type?: string;
   scope?: string;
   refresh_token?: string;
   logged: boolean;
}

type LoginAction = {
   type: 'login',
   payload: AuthResponse
}

type LogoutAction = {
   type: 'logout'
}

export type AuthAction = LoginAction | LogoutAction

export const authReducer = (state: AuthResponse, action: AuthAction): AuthResponse => {
   switch (action.type) {
      case 'login':
         return {
            ...action.payload,
            logged: true
         } as AuthResponse;

      case 'logout':
         return {
            logged: false
         } as AuthResponse;

      default:
         return state;
   }
}