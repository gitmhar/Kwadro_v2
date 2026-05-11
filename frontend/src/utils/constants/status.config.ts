// type Status = "available" | "occupied" | "maintenance";

type StatusConfig = {
  label: string;
  dot: string;
  text: string;
  bg: string;
};

export const STATUS_CONFIG = {
  available: {
    label: "Available",
    dot: "#22c55e",
    text: "#16a34a",
    bg: "#ecfdf5",
  },
  occupied: {
    label: "Occupied",
    dot: "#ef4444",
    text: "#dc2626",
    bg: "#fef2f2",
  },
  maintenance: {
    label: "Maintenance",
    dot: "#f59e0b",
    text: "#d97706",
    bg: "#fffbeb",
  },
} as const;

export type Status = keyof typeof STATUS_CONFIG;
export function getStatusConfig(status: string) {
  if (status in STATUS_CONFIG) {
    return STATUS_CONFIG[status as Status];
  }
  return STATUS_CONFIG.available;
}
