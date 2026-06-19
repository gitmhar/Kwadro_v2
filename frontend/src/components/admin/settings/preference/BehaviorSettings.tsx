import { Box, Stack, Typography } from "@mui/material";
import SettingsSectionLabel from "../../../ui/data-display/admin-settings/SettingsSectionLabel";
import StyledSelect from "../../../ui/inputs/StyledSelect";
import ToggleSettingsRow from "../../../ui/shared/settings/ToggleSettingsRow";

export default function BehaviorSettings() {
  return (
    <Stack spacing={3}>
      <SettingsSectionLabel label="Behaviors" />
      <Box>
        <Typography sx={{ fontWeight: 600, mb: 1.5 }}>Landing Page</Typography>
        <StyledSelect
          value="Dashboard"
          options={["Dashboard", "Reservation", "Intelligence"]}
        />
      </Box>

      <ToggleSettingsRow
        label="Auto-refresh"
        description="Sync data every 30s"
      />
    </Stack>
  );
}
