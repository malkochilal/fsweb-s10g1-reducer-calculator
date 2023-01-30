export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "Ekranı Temizle";

export const STORE_MEMORY = "HAFIZAYA AT";
export const MEMORY_TOTAL = "MEMORY_TOTAL";
export const MEMORY_RESET = "HAFIZA SIFIRLA";

export const addOne = () => {
  return ({ type: ADD_ONE });
};

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
};