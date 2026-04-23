import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  primaryBtnLabel: string;
  secondaryBtnLabel: string;
  primaryBtnIcon: ReactNode;
  secondaryBtnIcon: ReactNode;
  hideOnButtonMobile?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  primaryBtnLabel,
  secondaryBtnLabel,
  primaryBtnIcon,
  secondaryBtnIcon,
  hideOnButtonMobile = false,
}: SectionHeaderProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 3, md: 0 },
      }}
    >
      <Box>
        <Typography
          variant="caption"
          sx={{
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 3,
            color: "#777777",
          }}
        >
          {subtitle}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: hideOnButtonMobile ? { xs: "none", sm: "flex" } : "flex",
          justifyContent: { xs: "center", sm: "flex-end" },
          gap: 2,
          alignItems: "center",
          width: { xs: "100%", md: "auto" },
        }}
      >
        {primaryBtnLabel && (
          <Button
            startIcon={primaryBtnIcon}
            sx={{
              bgcolor: "#f3f3f3",
              px: 2,
              borderRadius: 2,
              width: { xs: "100%", sm: "auto" },
              whiteSpace: "nowrap",
            }}
          >
            {primaryBtnLabel}
          </Button>
        )}
        {secondaryBtnLabel && (
          <Button
            startIcon={secondaryBtnIcon}
            sx={{
              bgcolor: "#000000",
              color: "#ffffff",
              px: 2,
              borderRadius: 2,
              width: { xs: "100%", sm: "auto" },
              whiteSpace: "nowrap",
            }}
          >
            {secondaryBtnLabel}
          </Button>
        )}
      </Box>
    </Box>
  );
}
