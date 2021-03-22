import { createContext } from 'react';
import { AuthAction, AuthResponse } from 'shared/reducer/authReducer';

export interface IAuthContext {
   authData: AuthResponse;
   dispatch: React.Dispatch<AuthAction>;
}
 
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);