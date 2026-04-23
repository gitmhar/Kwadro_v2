import { Box, Typography } from "@mui/material";
import AdminCard from "../../ui/AdminCard";

export default function Capacity() {
  return (
    <AdminCard>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 3, md: 2 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            textAlign: {xs: "center", lg: "left"},
            alignItems: {xs: "center", lg: "flex-start"},
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              textTransform: "uppercase",
              color: "#a3a3a3",
              letterSpacing: 1,
            }}
          >
            CURRENT CAPACITY
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              my: 1,
              fontSize: {
                xs: "2.5rem",
                sm: "3rem",
                md: "3.75rem",
              },
            }}
          >
            84
            <Box
              component="span"
              sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, color: "#a3a3a3" }}
            >
              %
            </Box>
          </Typography>
          <Typography variant="body2" sx={{ color: "#474747" }}>
            Operational velocity is within target parameters. <br />4 tables
            undergoing maintenance
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: { xs: "100%", md: "auto" },
            justifyContent: { xs: "center", md: "flex-end" },
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              bgcolor: "#f5f5f5",
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              textAlign: "center",
              minWidth: { xs: "45%", sm: 120 },
              flexGrow: { xs: 1, sm: 0 },
            }}
          >
            <Typography
              variant="caption"
              sx={{ fontWeight: 700, color: "#666" }}
            >
              ACTIVE
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              24
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "#f5f5f5",
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              textAlign: "center",
              minWidth: { xs: "45%", sm: 120  },
              flexGrow: { xs: 1, sm: 0 },
            }}
          >
            <Typography
              variant="caption"
              sx={{ fontWeight: 700, color: "#666" }}
            >
              QUEUED
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              12
            </Typography>
          </Box>
        </Box>
      </Box>
    </AdminCard>
  );
}
