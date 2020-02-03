import * as actionTypes from "./actionTypes";
export const showModal = () => {
  return {
    type: actionTypes.SHOW_PASSWORD_MODAL
  };
};

export const hideModal = () => {
  return {
    type: actionTypes.HIDE_PASSWORD_MODAL
  };
};
