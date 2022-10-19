import api from "./api";

export const fetchRandomCat = async () => {
  try {
    const response = await api.get("meow");

    return response;
  } catch (error) {
    return error.response;
  }
};
