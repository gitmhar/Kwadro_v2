import { Box, Typography } from "@mui/material";
import { OpToggle } from "../../../ui/shared/OpToggle";
import { cueColors } from "../../../../theme/dashboard/cueColors";

interface ToggleSettingProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function ToggleSetting({
  label,
  checked,
  onChange,
}: ToggleSettingProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: '"Inter", sans-serif',
          fontSize: "0.875rem",
          lineHeight: 1.5,
          fontWeight: 600,
          color: cueColors.onSurface,
        }}
      >
        {label}
      </Typography>
      <OpToggle
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </Box>
  );
}
