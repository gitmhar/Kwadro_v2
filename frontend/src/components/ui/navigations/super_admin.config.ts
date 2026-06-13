import type { SidebarConfig, SidebarItem } from "../../../types/sidebar";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import PaymentsIcon from "@mui/icons-material/Payments";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import BadgeIcon from "@mui/icons-material/Badge";
import SettingsIcon from "@mui/icons-material/Settings";
import BrandLogo from "../../../assets/logo.png";

export const superAdminSidebar: SidebarItem[] = [
  {
    text: "Executive",
    icon: DashboardOutlinedIcon,
    path: "/super-admin",
    group: "main",
  },
  {
    text: "Operations",
    icon: PrecisionManufacturingIcon,
    path: "/super-admin/operations",
    group: "main",
  },
  {
    text: "Financial",
    icon: PaymentsIcon,
    path: "/super-admin/financial",
    group: "main",
  },
  {
    text: "Intelligence",
    icon: AnalyticsIcon,
    path: "/super-admin/intelligence",
    group: "system",
  },
  {
    text: "Security",
    icon: AdminPanelSettingsIcon,
    path: "/super-admin/security",
    group: "system",
  },
  {
    text: "Staff",
    icon: BadgeIcon,
    path: "/super-admin/staff",
    group: "system",
  },
  {
    text: "System",
    icon: SettingsIcon,
    path: "/super-admin/system-management",
    group: "system",
  },
];

export const superAdminSidebarConfig: SidebarConfig = {
  brand: {
    icon: BrandLogo,
    title: "Cue Control",
    subtitle: "SUPER ADMIN",
    // avatarBg: "#fafafa",
    titleColor: "#ffffff"
  },
  sections: [
    {
      items: superAdminSidebar,
    },
  ],
};
