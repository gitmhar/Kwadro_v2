export type TransactionStatus = "paid" | "pending" | "flagged";

type TransactionStatusConfig = {
  bg: string;
  text: string;
};

export const TRANSACTION_STATUS_CONFIG: Record<
  TransactionStatus,
  TransactionStatusConfig
> = {
  paid: {
    bg: "#ECFDF5",
    text: "#059669",
  },
  pending: {
    bg: "#FFFBEB",
    text: "#D97706",
  },
  flagged: {
    bg: "#FEF2F2",
    text: "#DC2626",
  },
};
