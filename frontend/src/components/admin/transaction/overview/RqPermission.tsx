import { Box, Button, Stack, Typography } from "@mui/material";
import { LockOpen } from "@mui/icons-material";
import AdminCard from "../../../ui/cards/AdminCard";

export default function RqPermission() {
  return (
    <AdminCard
      sx={{
        p: 4,
        height: "100%",
        bgcolor: "#1a1c1c",
        borderRadius: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#fff",
        border: "none",
      }}
    >
      <Stack spacing={3}>
        <Box>
          <Box
            sx={{
              display: "inline-flex",
              bgcolor: "rgba(255,255,255, 0.1)",
              px: 1.5,
              py: 0.5,
              borderRadius: "6px",
              mb: 2,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#fff",
                letterSpacing: 1,
                textTransform: "uppercase",
                fontWeight: 800,
              }}
            >
              Security Lock
            </Typography>
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.2,
              mb: 2,
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
              fontWeight: 500,
            }}
          >
            Modification of historical records is logged and requires
            multi-factor authentication from Executive Admin.
          </Typography>
        </Box>
      </Stack>

      {/* Button at the bottom */}
      <Box sx={{ mt: 4 }}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<LockOpen />}
          sx={{
            mt: 4,
            bgcolor: "#ffffff",
            color: "#1a1c1c",
            fontWeight: 600,
            py: 1.8,
            borderRadius: "14px",
            textTransform: "none",
            "&:hover": { bgcolor: "#f3f3f3" },
          }}
        >
          Request Permission
        </Button>
      </Box>
    </AdminCard>
  );
}
