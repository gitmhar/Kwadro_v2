import type { ReactNode } from "react";
import ReservationCardShell from "../../../ui/shared/ReservationCardShell";

export interface ReservationCardData {
  id: string;
}

interface ReservationCardProps {
  data: ReservationCardData;
  left: ReactNode;
  right: ReactNode;
  bottom: ReactNode;
}

export default function ReservationCard({
  left,
  right,
  bottom,
}: ReservationCardProps) {
  return <ReservationCardShell left={left} right={right} bottom={bottom} />;
}
