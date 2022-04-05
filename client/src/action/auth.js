import * as api from "../api/index.js";

export const login = async (loginData, history) => {
  console.log(loginData);

  try {
    const { data } = await api.login(loginData);
    console.log(data);
    history.goBack();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (signUpData, history) => {
  try {
    const { data } = await api.signUp(signUpData);
    history.goBack();
    return data;
  } catch (error) {
    console.log(error);
  }
};
