import { useState } from 'react';
import { HTMLEvent } from '../utils/interfaces';

export const useForm = (initialState: any = {}) => {
   const [values, setValues] = useState(initialState);

   const reset = () => {
      setValues( initialState );
   }

   const handleInputChange = (event: HTMLEvent) => {
      const { target } = event;
      setValues({
         ...values,
         [target.name]: target.value
      })
   }

   return [values, handleInputChange, reset];
}