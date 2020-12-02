import { actions } from './actions';
export const reducer = (state: any, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case actions.setPreviewImage:
      return {
        ...state,
        previewImage: action.payload,
      };
    default:
      return state;
  }
};