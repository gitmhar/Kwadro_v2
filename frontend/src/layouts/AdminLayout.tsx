import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Sidebar from "../components/ui/navigations/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Menu } from "@mui/icons-material";
import GlobalFab from "../components/ui/feedback/GlobalFab";
import { adminSidebarConfig } from "../components/ui/navigations/admin.config";

export default function AdminLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", overflow: "hidden" }}>
      <Sidebar
        config={adminSidebarConfig}
        role="ADMIN"
        open={open}
        handleToggle={handleToggle}
        isMobile={isMobile}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "#fafafa",
          color: "#000",
          minWidth: 0,
          overflow: "hidden",
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
          <Typography variant="h4" sx={{ fontWeight: 600, textAlign: "center" }}>
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
        <Box
          sx={{
            px: { xs: 2, sm: 3 },
            flexGrow: 1,
            overflow: "hidden",
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <Outlet />
          <GlobalFab />
        </Box>
      </Box>
    </Box>
  );
}
