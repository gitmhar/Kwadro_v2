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
import { Link, useLocation } from "react-router-dom";
import type { UserRole } from "../../../types/auth";
import type { SidebarConfig, SidebarItem } from "../../../types/sidebar";


interface SidebarProps {
  config: SidebarConfig;
  open: boolean;
  handleToggle: () => void;
  isMobile: boolean;
  role: UserRole;
}

export default function Sidebar({
  config,
  open,
  handleToggle,
  isMobile,
  role,
}: SidebarProps) {
  const location = useLocation();
  const isImageAsset = typeof config.brand.icon === "string";
  const IconComponent = !isImageAsset ? config.brand.icon : null;
  const drawerBg = role === "SUPER_ADMIN" ? "#121414" : "#fafafa";

  const renderMenuItem = (item: SidebarItem) => {
    const isActive = location.pathname === item.path;
    const Icon = item.icon;
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
            <Icon />
          </ListItemIcon>
          <ListItemText
            primary={item.text}
            slotProps={{
              primary: {
                fontSize: "0.90rem",
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
          borderRight: "1px solid #444748",
          backgroundColor: drawerBg,
          padding: "20px",
        },
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 4, gap: 2 }}>
        {config.brand.icon && (
          <Avatar
            variant="rounded"
            sx={{
              bgcolor: config.brand.avatarBg ?? "#000",
              width: 40,
              height: 40,
            }}
          >
            {isImageAsset ? (
              <img
                src={config.brand.icon as string}
                alt="Logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            ) : (
              IconComponent && (
                <Box
                  component="span"
                  sx={{ fontSize: "1.2rem", color: "white" }}
                >
                  <IconComponent />
                </Box>
              )
            )}
          </Avatar>
        )}

        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              lineHeight: 1.2,
              color: config.brand.titleColor ?? "#000",
            }}
          >
            {config.brand.title}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "#fafafa",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            {config.brand.subtitle}
          </Typography>
        </Box>
      </Box>
      {/* Dashboard Menu */}
      {config.sections.map((section, i) => (
        <List key={i} disablePadding>
          {section.items.map((item) => renderMenuItem(item))}
        </List>
      ))}

      <Box sx={{ mt: "auto", pt: 2 }}>
        {config.footer && (
          <List disablePadding>{config.footer.map(renderMenuItem)}</List>
        )}
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
            <Typography sx={{ fontWeight: 700, fontSize: "0.75rem" }}>
              {role}
            </Typography>
            <Typography sx={{ color: "#9e9e9e", fontSize: "0.65rem" }}>
              {role}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
