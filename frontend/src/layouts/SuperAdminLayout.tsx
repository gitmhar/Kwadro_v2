import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Sidebar from "../components/ui/navigations/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { superAdminSidebarConfig } from "../components/ui/navigations/super_admin.config";

export default function SuperAdminLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar
        config={superAdminSidebarConfig}
        role="SUPER_ADMIN"
        open={open}
        handleToggle={handleToggle}
        isMobile={isMobile}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "#121414",
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
            backgroundColor: "#1f2020",
          }}
        >
          {isMobile && (
            <IconButton onClick={handleToggle} sx={{ mr: 1, color: "#000" }}>
              <Menu />
            </IconButton>
          )}
          <Typography variant="h4" sx={{ fontWeight: 600, color: "#FFFFFF" }}>
            Command Center
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
