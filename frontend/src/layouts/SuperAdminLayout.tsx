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
import { cueColors } from "../components/super-admin/executive/cueColors";

export default function SuperAdminLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", width: "100%", maxWidth: "100%", boxSizing: "border-box" }}>
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
          width: "100%",
          maxWidth: "100%",
          minWidth: 0,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
            borderBottom: `1px solid ${cueColors.outlineVariant}`,
            px: { xs: 2, sm: 4 },
            backgroundColor: "#1f2020",
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box",
            position: { xs: "static", lg: "fixed" },
            top: 0,
            right: 0,
            left: { lg: "260px" },
            zIndex: 1100,
          }}
        >
          {isMobile && (
            <IconButton onClick={handleToggle} sx={{ mr: 1, color: "#FFFFFF" }}>
              <Menu />
            </IconButton>
          )}
          <Typography variant="h4" sx={{ fontWeight: 600, color: "#FFFFFF", fontSize: { xs: "20px", sm: "24px" } }}>
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
              color: "#FFFFFF",
              border: `1px solid ${cueColors.outlineVariant}`,
              backgroundColor: cueColors.surfaceVariant,
              fontSize: "10px",
              letterSpacing: "0.05em",
            }}
          >
            Live Feed
          </Typography>
        </Box>
        <Box
          sx={{
            px: { xs: 2, sm: 4 },
            pt: { xs: 4, lg: "96px" }, // 64px header height + 32px padding
            pb: 4,
            flexGrow: 1,
            width: "100%",
            maxWidth: "1600px",
            boxSizing: "border-box",
            mx: "auto",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

