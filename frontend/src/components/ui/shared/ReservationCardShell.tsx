import type { ReactNode } from "react";
import AdminCard from "../cards/AdminCard";
import { Box } from "@mui/material";

type Props = {
  left?: ReactNode;
  right?: ReactNode;
  bottom?: ReactNode;
  sx?: any;
};

export default function ReservationCardShell({
  left,
  right,
  bottom,
  sx,
}: Props) {
  return (
    <AdminCard sx={{ p: 3, borderRadius: 4, ...sx }}>
      {/* TOP section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: { xs: 2, sm: 0 },
          mb: 3,
        }}
      >
        <Box sx={{ flex: 1 }}>{left}</Box>
        {right && <Box sx={{ textAlign: "right" }}>{right}</Box>}
      </Box>

      {bottom && <Box>{bottom}</Box>}
    </AdminCard>
  );
}
