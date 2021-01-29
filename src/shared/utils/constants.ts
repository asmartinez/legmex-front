export const initialState = {
   login: {
      email: '',
      password: ''
   },
   reset: {
      email: ''
   }
};

export const handleForgetPassword = () => {
   const container_login = document.querySelector('.container-login');
   container_login?.classList.toggle('forget-mode');
}

export const API = 'https://www.apicolegioelastic.live';