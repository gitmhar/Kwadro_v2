import { Box, Stack, Switch, Typography } from "@mui/material";

export default function NotificationSettings() {
  return (
    <Stack spacing={3}>
      <Box sx={{ borderBottom: "1px solid #f0f0f0", pb: 1 }}>
        <Typography
          variant="caption"
          sx={{
            fontSize: "0.85rem",
            fontWeight: 700,
            color: "#a3a3a3",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          Notifications
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: 600, fontSize: "1rem" }}>
            Email Alerts
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#a3a3a3" }}>
            Security and billing updates
          </Typography>
        </Box>
        <Switch
          defaultChecked={false}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": { color: "#000" },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#000",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: 600, fontSize: "1rem" }}>
            Activity Digest
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#a3a3a3" }}>
            Weekly operational summary
          </Typography>
        </Box>
        <Switch
          defaultChecked={false}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": { color: "#000" },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#000",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: 600, fontSize: "1rem" }}>
            Push Notifications
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#a3a3a3" }}>
            Mobile real-time alerts
          </Typography>
        </Box>
        <Switch
          defaultChecked={false}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": { color: "#000" },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#000",
            },
          }}
        />
      </Box>
    </Stack>
  );
}
