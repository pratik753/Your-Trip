import * as api from "../api/index.js";

export const busAdd = async (busAddData) => {
  try {
    const data = await api.busAdd(busAddData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
