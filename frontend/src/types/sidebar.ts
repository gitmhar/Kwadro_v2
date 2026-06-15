import type { SvgIconComponent } from "@mui/icons-material";

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
    subtitleColor?: string;
  };
  sections: {
    title?: string;
    items: SidebarItem[];
  }[];
  footer?: SidebarItem[];
};
