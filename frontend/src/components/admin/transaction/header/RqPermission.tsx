import { Box, Button, Stack, Typography } from "@mui/material";
import { LockOpen } from "@mui/icons-material";
import AdminCard from "../../../ui/AdminCard";

export default function RqPermission() {
  return (
    <AdminCard
      sx={{
        p: 4, 
        height: "100%",
        bgcolor: "#000",
        borderRadius: "24px", 
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack spacing={3} sx={{ flexGrow: 1 }}>
        <Box>
          <Typography
            variant="caption"
            sx={{
              color: "#a3a3a3", 
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: 700,
              display: "block",
              mb: 2,
            }}
          >
            Security Lock
          </Typography>

          <Typography
            variant="h4" 
            sx={{
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.2, 
              maxWidth: "90%", 
            }}
          >
            Elevated Administrative Access Required
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="body2" 
            sx={{
              color: "#a3a3a3", 
              lineHeight: 1.6,
              maxWidth: "85%",
            }}
          >
            Modification of historical records is logged and requires
            multi-factor authentication from Executive Admin.
          </Typography>
        </Box>
      </Stack>

      {/* Button pushed to the bottom */}
      <Box sx={{ mt: 4 }}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<LockOpen  />}
          sx={{
            bgcolor: "#ffffff",
            color: "#000000",
            fontWeight: 600,
            py: 1.5, 
            borderRadius: "12px",
            textTransform: "none", 
            "&:hover": { bgcolor: "#e0e0e0" },
          }}
        >
          Request Permission
        </Button>
      </Box>
    </AdminCard>
  );
}
