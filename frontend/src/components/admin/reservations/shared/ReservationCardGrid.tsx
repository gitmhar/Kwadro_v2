// src/features/reservations/shared/ReservationCardGrid.tsx
import { Grid } from "@mui/material";
import ReservationCard, { type ReservationCardData } from "./ReservationCard";
import type { ReactNode } from "react";

interface ReservationCardGridProps<T extends ReservationCardData> {
  data: T[];
  renderCard: (item: T) => {
    left: ReactNode;
    right: ReactNode;
    bottom: ReactNode;
  };
}

export default function ReservationCardGrid<T extends ReservationCardData>({
  data,
  renderCard,
}: ReservationCardGridProps<T>) {
  return (
    <Grid container spacing={3}>
      {data.map((item) => {
        const { left, right, bottom } = renderCard(item);
        return (
          <Grid key={item.id} size={{ xs: 12, md: 6, lg: 4 }}>
            <ReservationCard
              data={item}
              left={left}
              right={right}
              bottom={bottom}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
