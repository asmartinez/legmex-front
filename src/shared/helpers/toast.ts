import { toast } from "react-toastify"

export const toastError = () => {
   toast.error('Error', {
      position: toast.POSITION.TOP_LEFT
   });
};

export const toastUpdate = () => {
   toast.update('Registro actualizado correctamente', {
      position: toast.POSITION.TOP_LEFT
   });
};

export const toastStore = () => {
   toast.success('Registro guardado correctamente', {
      position: toast.POSITION.TOP_LEFT
   });
};

export const toastDelete = () => {
   toast.success('Registro eliminado correctamente', {
      position: toast.POSITION.TOP_LEFT
   });
};