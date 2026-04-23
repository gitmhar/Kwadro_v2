import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Sidebar from "../components/partials/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Menu } from "@mui/icons-material";

export default function AdminLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar open={open} handleToggle={handleToggle} isMobile={isMobile} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "#f9f9f9",
          color: "#000",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 4,
            px: 5,
            py: 3,
            gap: 2,
            backgroundColor: "#fefefe",
          }}
        >
          {isMobile && (
            <IconButton onClick={handleToggle} sx={{ mr: 1, color: "#000" }}>
              <Menu />
            </IconButton>
          )}
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Operational Overview
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              px: 1.5,
              py: 0.5,
              borderRadius: "4px",
              textTransform: "uppercase",
              textDecoration: "underline",
            }}
          >
            Real-Time
          </Typography>
        </Box>
        <Box sx={{ px: 3, flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
