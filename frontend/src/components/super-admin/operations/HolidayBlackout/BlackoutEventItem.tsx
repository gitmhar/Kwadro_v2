import { Box, ButtonBase, Typography } from "@mui/material";
import { cueColors } from "../../../../theme/dashboard/cueColors";
import { Close } from "@mui/icons-material";

interface BlackoutEvent {
  id: string;
  name: string;
  details: string;
  severity: "error" | "outline";
}

interface BlackoutEventProps {
  event: BlackoutEvent;
  onRemove: (id: string) => void;
}

export default function BlackoutEventItem({
  event,
  onRemove,
}: BlackoutEventProps) {
  return (
    <Box
      sx={{
        backgroundColor: cueColors.surfaceDim,
        borderLeft: `4px solid ${
          event.severity === "error" ? cueColors.error : cueColors.outline
        }`,
        p: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.6875rem",
            fontWeight: 700,
            color: cueColors.primary,
          }}
        >
          {event.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "0.625rem",
            color: cueColors.onSurfaceVariant,
            opacity: 0.6,
            mt: "2px",
          }}
        >
          {event.details}
        </Typography>
      </Box>
      <ButtonBase
        onClick={() => onRemove(event.id)}
        className="material-symbols-outlined"
        sx={{
          fontSize: "1.125rem",
          color: cueColors.primary,
          opacity: 0.4,
          cursor: "pointer",
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        <Close />
      </ButtonBase>
    </Box>
  );
}
