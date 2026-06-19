import { Box, Switch, Typography } from "@mui/material";

interface ToggleSettingsRowProps {
  label: string;
  description?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function ToggleSettingsRow({
  label,
  description,
  checked = false,
  onChange,
}: ToggleSettingsRowProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: "1rem" }}>
          {label}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "#a3a3a3" }}>
          {description}
        </Typography>
      </Box>
      <Switch
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        sx={{
          "& .MuiSwitch-switchBase.Mui-checked": { color: "#000000" },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#000000",
          },
        }}
      />
    </Box>
  );
}
