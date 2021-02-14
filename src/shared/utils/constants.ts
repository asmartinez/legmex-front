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

/**
 * Title Page Index
 */
export const Title = '16,890 disposiciones numeradas, ordenadas cronológicamente, cuya cobertura va de 1687 a 1902. Dedica tres de sus volúmenes a Códigos, Ordenanzas y Reglamentos del Ejército y Armada de la República Mexicana.';

/**
 * Color Palette System
 */
export const Gray = '#F7F8FA';