import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Switch,
  Typography,
} from "@mui/material";

export default function InterfaceSetting() {
  return (
    <Stack spacing={3} sx={{ width: "100%" }}>
      {/* Header with full-width border */}
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
          Interface
        </Typography>
      </Box>

      {/* Dark Mode Toggle */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: "1rem" }}>
          Dark Mode
        </Typography>
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
        <FormControl fullWidth>
          <Select
            defaultValue="Comfortable"
            variant="standard"
            disableUnderline
            MenuProps={{
                slotProps: {
                    paper: { sx: {bgcolor: "#fff"}}
                }
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
              value="Comfortable"
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
              Comfortable
            </MenuItem>
            <MenuItem
              value="Compact"
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
              Compact
            </MenuItem>
            <MenuItem
              value="Relaxed"
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
              Relaxed
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Stack>
  );
}
