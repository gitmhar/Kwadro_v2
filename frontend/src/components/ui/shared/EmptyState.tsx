import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { cueColors } from "../../../theme/dashboard/cueColors";

interface EmptyStateProps {
  message: string;
  icon?: ReactNode;
}

export default function EmptyState({ message, icon }: EmptyStateProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: "24px",
        gap: "8px",
      }}
    >
      {icon && (
        <Box sx={{ color: cueColors.onSurfaceVariant, opacity: 0.4 }}>
          {icon}
        </Box>
      )}
      <Typography
        sx={{
          fontFamily: '"Inter", sans-serif',
          fontSize: "0.75rem",
          color: cueColors.onSurfaceVariant,
          opacity: 0.6,
          textAlign: "center",
          py: "24px",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
}
