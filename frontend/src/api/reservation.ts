import api from "../api/api";

export const reservationServices = {
  createReservation: async (data: any) => {
    const response = await api.post("/book", data);
    return response.data;
  },

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

  getReservationStatus: async (reservationId: string) => {
    const response = await api.get(`/book/status/${reservationId}`);
    return response.data;
  },

  getReservationId: async (reservationId: string) => {
    const response = await api.get(`/book/${reservationId}`);
    return response.data;
  },

  // deleteReservation: async (reservationId: string) => {
  //   const response = await api.delete(`/book/${reservationId}`);
  //   return response.data;
  // },
};
