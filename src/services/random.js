import api from "./api";

export const fetchRandomCat = async () => {
  try {
    const response = await api.get("says/Hellow%20Sheila");

    return response;
  } catch (error) {
    return error.response;
  }
};
