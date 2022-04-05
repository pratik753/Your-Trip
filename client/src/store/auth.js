import { createSlice } from "@reduxjs/toolkit";

const roleLS = localStorage.getItem("role");
const authLS = localStorage.getItem("auth");
const initialAuthState = {
  isAuthenticaticated: authLS,
  role: +roleLS,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      const userProfile = action.payload;
      localStorage.setItem("role", +userProfile.role);
      localStorage.setItem("auth", userProfile.auth);
      state.isAuthenticaticated = authLS;
      state.role = +roleLS;
    },
    logout(state, action) {
      state.isAuthenticaticated = false;
      state.role = 2;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
