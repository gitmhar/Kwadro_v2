import api from "../api/api";

export const stripeServices = {
  createCheckout: async (reservationId: string) => {
    const response = await api.post(
      `/api/reservations/checkout/${reservationId}`,
    );
    return response.data;
  },
};
