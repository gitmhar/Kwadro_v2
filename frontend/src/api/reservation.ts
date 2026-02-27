import api from "../api/api";

export const reservationServices = {
  getBusySlots: async (tableNumber: number, date: string) => {
    const response = await api.get(`/book/busy/${tableNumber}`, {
      params: { date },
    });
    return response.data;
  },

  getActiveReservations: async () => {
    const response = await api.get("/book/active");
    return response.data;
  },

  createReservation: async (data: any) => {
    const response = await api.post("/book", data);
    return response.data;
  },
};
