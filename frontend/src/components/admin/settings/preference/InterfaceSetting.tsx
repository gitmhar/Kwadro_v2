import { Box, Button, Stack, Typography } from "@mui/material";
import SettingsSectionLabel from "../../../ui/data-display/admin-settings/SettingsSectionLabel";
import ToggleSettingsRow from "../../../ui/shared/settings/ToggleSettingsRow";
import StyledSelect from "../../../ui/inputs/StyledSelect";

export default function InterfaceSetting() {
  return (
    <Stack spacing={3} sx={{ width: "100%" }}>
      {/* Header */}
      <SettingsSectionLabel label="Interface" />

      {/* Dark Mode Toggle */}

      <ToggleSettingsRow label="Dark Mode" />

      {/* Table View Style Toggles */}
      <Box>
        <Typography sx={{ fontWeight: 600, mb: 1.5 }}>
          Table View Style
        </Typography>
        <Box sx={{ display: "flex", gap: 1.5 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "#000",
              color: "#fff",
              borderRadius: "12px",
              py: 1.5,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { bgcolor: "#333" },
            }}
          >
            Grid
          </Button>
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "#f5f5f5",
              color: "#1a1c1c",
              borderRadius: "12px",
              py: 1.5,
              textTransform: "none",
              fontWeight: 600,
              boxShadow: "none",
              "&:hover": { bgcolor: "#eee" },
            }}
          >
            List
          </Button>
        </Box>
      </Box>

      {/* Density Dropdown */}
      <Box>
        <Typography sx={{ fontWeight: 600, mb: 1.5 }}>Density</Typography>
        <StyledSelect
          value="Comfortable"
          options={["Comfortable", "Compact", "Relaxed"]}
        />
      </Box>
    </Stack>
  );
}
