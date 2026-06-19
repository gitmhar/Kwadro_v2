import { Stack } from "@mui/material";
import SettingsSectionLabel from "../../../ui/data-display/admin-settings/SettingsSectionLabel";
import ToggleSettingsRow from "../../../ui/shared/settings/ToggleSettingsRow";

const toggles = [
  { label: "Email Alerts", description: "Security and billing updates" },
  { label: "Activity Digest", description: "Weekly operational summary" },
  { label: "Push Notifications", description: "Mobile real-time alerts" },
];

export default function NotificationSettings() {
  return (
    <Stack spacing={3}>
      <SettingsSectionLabel label="Notifications" />
      {toggles.map((toggle) => (
        <ToggleSettingsRow
          key={toggle.label}
          label={toggle.label}
          description={toggle.description}
        />
      ))}
    </Stack>
  );
}
