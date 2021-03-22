import axios from 'axios';
import { AuthResponse } from 'shared/reducer/authReducer';

class AuthenticationService {
   protected get uri(): string {
      return `${process.env.REACT_APP_API_URL}/authentication/`;
   }

   public login = async (username: string, password: string): Promise<AuthResponse> => {
      try {
         const { data } = await axios.post<AuthResponse>(`${this.uri}/token/`, {
            username: username,
            password: password
         });
         return data;
      }
      catch {
         return {} as AuthResponse;
      }
   }
  
   public logout = async (token: string): Promise<string> => {
      try {
         const { data } = await axios.post<string>(`${this.uri}/token/revoke/`, {
            token: token,
         });
         localStorage.removeItem('authentication');
         return data;
      }
      catch {
         return 'error';
      }
   }
}

export const authenticationService = new AuthenticationService();
