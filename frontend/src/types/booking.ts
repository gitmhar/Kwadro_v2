export type Reservation = {
  tableNumber: number;
  startTime: string;
  endTime: string;
};

export type OperatingHours = {
  open: number;
  close: number;
};

export type CheckOverlap = {
  startTime: string;
  endTime: string;
};
