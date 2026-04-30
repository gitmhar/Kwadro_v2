import {
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import { useTheme, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  handleToggle: () => void;
  isMobile: boolean;
}

export default function Sidebar({
  open,
  handleToggle,
  isMobile,
}: SidebarProps) {
  const location = useLocation();
  const sidebarMenu = [
    {
      text: "Monitor",
      icon: <DashboardOutlinedIcon />,
      path: "/admin",
    },
    {
      text: "Reservations",
      icon: <CalendarTodayOutlinedIcon />,
      path: "/admin/reservations",
    },
    {
      text: "Intelligence",
      icon: <InsightsOutlinedIcon />,
      path: "/admin/intelligence",
    },
    {
      text: "Transaction",
      icon: <LocalAtmOutlinedIcon />,
      path: "/admin/transaction",
    },
  ];

  const renderMenuItem = (item: any) => {
    const isActive = location.pathname === item.path;
    return (
      <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
        <ListItemButton
          component={Link}
          to={item.path}
          sx={{
            borderRadius: "12px",
            backgroundColor: isActive ? "#e0e0e0" : "transparent",
            "&:hover": { backgroundColor: "#eeeeee" },
            py: 1.5,
          }}
        >
          <ListItemIcon
            sx={{ minWidth: 40, color: isActive ? "black" : "#9e9e9e" }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText
            primary={item.text}
            slotProps={{
              primary: {
                fontWeight: isActive ? 600 : 500,
                color: isActive ? "black" : "#9e9e9e",
              },
            }}
          />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isMobile ? open : true}
      onClose={handleToggle}
      sx={{
        width: 260,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 260,
          borderRight: "none",
          backgroundColor: "#fafafa",
          padding: "20px",
        },
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 4, gap: 2 }}>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "black", width: 40, height: 40 }}
        >
          <Box component="span" sx={{ fontSize: "1.2rem", color: "white" }}>
            <TerminalOutlinedIcon />
          </Box>
        </Avatar>
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, lineHeight: 1.2, color: "#000" }}
          >
            Command <br /> Center
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Global Administration
          </Typography>
        </Box>
      </Box>
      {/* Dashboard Menu */}
      <List disablePadding>
        {sidebarMenu.map((item) => renderMenuItem(item))}
      </List>

      <Box sx={{ mt: "auto", pt: 2 }}>
        
        <List disablePadding>
          {renderMenuItem({
            text: "Settings",
            icon: <SettingsOutlinedIcon />,
            path: "/admin/settings",
          })}
        </List>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mt: 2,
            p: 1.5,
            bgcolor: "#f0f0f0",
            borderRadius: "12px",
          }}
        >
          <Avatar src="/path-to-avatar.jpg" sx={{ width: 32, height: 32 }} />
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: "0.85rem" }}>
              Admin Mhar
            </Typography>
            <Typography sx={{ color: "#9e9e9e", fontSize: "0.7rem" }}>
              Staff Admin
            </Typography>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
