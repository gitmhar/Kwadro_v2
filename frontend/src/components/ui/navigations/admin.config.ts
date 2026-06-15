import { TerminalOutlined } from "@mui/icons-material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import type { SidebarConfig, SidebarItem } from "../../../types/sidebar";

export const adminSidebar: SidebarItem[] = [
  {
    text: "Monitor",
    icon: DashboardOutlinedIcon,
    path: "/admin",
    group: "main",
  },
  {
    text: "Reservations",
    icon: CalendarTodayOutlinedIcon,
    path: "/admin/reservations",
    group: "main",
  },
  {
    text: "Intelligence",
    icon: InsightsOutlinedIcon,
    path: "/admin/intelligence",
    group: "main",
  },
  {
    text: "Transaction",
    icon: LocalAtmOutlinedIcon,
    path: "/admin/transactions",
    group: "main",
  },
];

export const adminBottomMenu: SidebarItem[] = [
  {
    text: "Settings",
    icon: SettingsOutlinedIcon,
    path: "/admin/settings",
  },
];

export const adminSidebarConfig: SidebarConfig = {
  brand: {
    icon: TerminalOutlined,
    title: "Command Center",
    subtitle: "Global Administration",
    avatarBg: "#000000",
    subtitleColor: "#000000",
  },
  sections: [
    {
      items: adminSidebar,
    },
  ],
  footer: adminBottomMenu,
};
