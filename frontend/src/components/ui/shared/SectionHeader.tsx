import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { ReactNode } from "react";
import { cueColors } from "../../../theme/dashboard/cueColors";
import { headerTheme } from "../../../theme/dashboard/headerTheme";

interface SectionHeaderProps {
  // Kaliwa ni bai
  icon?: ReactNode;
  title: string;
  subtitle?: string;

  // Content preferences
  statusBadge?: ReactNode;
  statusBadgeSx?: object;
  primaryBtnLabel?: string;
  secondaryBtnLabel?: string;
  primaryBtnIcon?: ReactNode;
  secondaryBtnIcon?: ReactNode;

  // Left and Right Contents
  leftElement?: ReactNode;
  rightElement?: ReactNode;

  // Style
  variant?: "admin" | "super-admin";
  hideButtonOnMobile?: boolean;
  titleFirst?: boolean;
  sx?: object;
}

export default function SectionHeader({
  icon,
  title,
  subtitle,
  statusBadge,
  primaryBtnLabel,
  secondaryBtnLabel,
  primaryBtnIcon,
  secondaryBtnIcon,
  leftElement,
  rightElement,
  hideButtonOnMobile = false,
  variant = "admin",
  titleFirst = false,
  sx,
  statusBadgeSx,
}: SectionHeaderProps) {
  const titleNode = title && (
    <Typography
      sx={{
        fontWeight: 600,
        fontFamily:
          variant === "super-admin" ? '"JetBrains Mono", monospace' : undefined,
        color: variant === "super-admin" ? cueColors.onSurface : undefined,
        fontSize: variant === "super-admin" ? "0.6875rem" : "2.125rem",
        letterSpacing: variant === "super-admin" ? "0.05em" : undefined,
        textTransform: variant === "super-admin" ? "uppercase" : undefined,
      }}
    >
      {title}
    </Typography>
  );

  const subtitleNode = subtitle && (
    <Typography
      variant="caption"
      sx={{
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: variant === "admin" ? 3 : undefined,
        color:
          variant === "super-admin"
            ? cueColors.onSurfaceVariant
            : headerTheme.admin.subtitleColor,
        fontFamily:
          variant === "super-admin" ? '"JetBrains Mono", monospace' : undefined,
        fontSize: variant === "super-admin" ? "0.625rem" : undefined,
      }}
    >
      {subtitle}
    </Typography>
  );

  const left = leftElement ?? (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      {icon && (
        <Box
          sx={{
            color: variant === "super-admin" ? cueColors.primary : "inherit",
          }}
        >
          {icon}
        </Box>
      )}
      <Box>
        {titleFirst ? (
          <>
            {titleNode}
            {subtitleNode}
          </>
        ) : (
          <>
            {subtitleNode}
            {titleNode}
          </>
        )}
      </Box>
    </Box>
  );

  const right = rightElement ?? (
    <>
      {statusBadge && (
        <Box
          component="span"
          sx={{
            fontSize: "0.625rem",
            fontFamily: '"JetBrains Mono", monospace',
            color: cueColors.primary,
            px: "8px",
            py: "2px",
            backgroundColor: cueColors.surfaceBright,
            border: `1px solid ${cueColors.outlineVariant}`,
            ...statusBadgeSx,
          }}
        >
          {statusBadge}
        </Box>
      )}
      {(primaryBtnLabel || secondaryBtnLabel) && (
        <Box
          sx={{
            display: hideButtonOnMobile ? { xs: "none", sm: "flex" } : "flex",
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
      )}
    </>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 2, sm: 0 },
        // Sofer Admin specific bitaw
        ...(variant === "super-admin" && {
          alignItems: "center",
          borderBottom: "1px solid",
          borderColor: cueColors.outlineVariant,
          pb: "12px",
          mb: "24px",
        }),
        ...sx,
      }}
    >
      {left}
      {right}
    </Box>
  );
}
