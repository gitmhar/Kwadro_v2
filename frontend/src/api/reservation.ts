import api from "../api/api";

export const createReservation = async (data: any) => {
  try {
    const response = await api.post("/reservation", data);
    return response.data;
  } catch (error) {
    console.error("Error booking reservation", error);
    throw error;
  }
};
