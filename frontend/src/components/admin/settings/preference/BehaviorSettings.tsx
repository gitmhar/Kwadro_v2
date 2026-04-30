import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Switch,
  Typography,
} from "@mui/material";

export default function BehaviorSettings() {
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
      <Box>
        <Typography sx={{ fontWeight: 600, mb: 1.5 }}>Landing Page</Typography>
        <FormControl fullWidth>
          <Select
            defaultValue="Dashboard"
            variant="standard"
            disableUnderline
            MenuProps={{
              slotProps: {
                paper: { sx: { bgcolor: "#fff" } },
              },
            }}
            sx={{
              bgcolor: "#f5f5f5",
              color: "#000",
              borderRadius: "12px",
              px: 2,
              py: 0.5,
              fontWeight: 500,
              "& .MuiSelect-select": { py: 1.5 },
            }}
          >
            <MenuItem
              value="Dashboard"
              sx={{
                color: "#000",
                "&.Mui-selected": {
                  backgroundColor: "#eaeaea",
                  color: "#000",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              value="Reservation"
              sx={{
                color: "#000",
                "&.Mui-selected": {
                  backgroundColor: "#eaeaea",
                  color: "#000",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              Reservation
            </MenuItem>
            <MenuItem
              value="Intelligence"
              sx={{
                color: "#000",
                "&.Mui-selected": {
                  backgroundColor: "#eaeaea",
                  color: "#000",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              Intelligence
            </MenuItem>
          </Select>
        </FormControl>
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
            Auto-refresh
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#a3a3a3" }}>
            Sync data every 30s
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
