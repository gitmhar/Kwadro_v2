import type { SvgIconComponent } from "@mui/icons-material";
import type { ReactNode } from "react";

export type SidebarItem = {
  text: string;
  icon: SvgIconComponent;
  path: string;
  group?: "main" | "system";
};

export type SidebarConfig = {
  brand: {
    icon?: string | SvgIconComponent;
    title: string;
    subtitle: string;
    avatarBg?: string;
    titleColor?: string;
  };
  sections: {
    title?: string;
    items: SidebarItem[];
  }[];
  footer?: SidebarItem[];
};
