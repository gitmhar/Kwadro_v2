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

  // Contento na sayo
  statusBadge?: ReactNode;
  primaryBtnLabel?: string;
  secondaryBtnLabel?: string;
  primaryBtnIcon?: ReactNode;
  secondaryBtnIcon?: ReactNode;

  // Harap sa [direction] na! Sir yes sir!
  leftElement?: ReactNode;
  rightElement?: ReactNode;

  // Style mo!
  variant?: "admin" | "super-admin";
  hideButtonOnMobile?: boolean;
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
  sx,
}: SectionHeaderProps) {
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
        {subtitle && (
          <Typography
            variant="caption"
            sx={{
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 3,
              color:
                variant === "super-admin"
                  ? cueColors.primary
                  : headerTheme.admin.subtitleColor,
              fontFamily:
                variant === "super-admin"
                  ? '"JetBrains Mono", monospace'
                  : undefined,
            }}
          >
            {subtitle}
          </Typography>
        )}
        {title && (
          <Typography
            sx={{
              fontWeight: 600,
              fontFamily:
                variant === "super-admin"
                  ? '"JetBrains Mono", monospace'
                  : undefined,
              color: variant === "super-admin" ? cueColors.primary : undefined,
              fontSize: variant === "super-admin" ? "0.85rem" : "2.125rem",
              letterSpacing: variant === "super-admin" ? "0.05em" : undefined,
              textTransform:
                variant === "super-admin" ? "uppercase" : undefined,
            }}
          >
            {title}
          </Typography>
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
    // <Box
    //   sx={{
    //     display: "flex",
    //     justifyContent: "space-between",
    //     flexDirection: { xs: "column", sm: "row" },
    //     gap: { xs: 3, md: 0 },
    //   }}
    // >
    //   <Box>
    //     <Typography
    //       variant="caption"
    //       sx={{
    //         fontWeight: 600,
    //         textTransform: "uppercase",
    //         letterSpacing: 3,
    //         color: "#777777",
    //       }}
    //     >
    //       {subtitle}
    //     </Typography>
    //     <Typography variant="h4" sx={{ fontWeight: 600 }}>
    //       {title}
    //     </Typography>
    //   </Box>
    //   {hasButtons && (
    //     <Box
    //       sx={{
    //         display: hideButtonOnMobile ? { xs: "none", sm: "flex" } : "flex",
    //         justifyContent: { xs: "center", sm: "flex-end" },
    //         gap: 2,
    //         alignItems: "center",
    //         width: { xs: "100%", md: "auto" },
    //       }}
    //     >
    //       {primaryBtnLabel && (
    //         <Button
    //           startIcon={primaryBtnIcon}
    //           sx={{
    //             bgcolor: "#f3f3f3",
    //             px: 2,
    //             borderRadius: 2,
    //             width: { xs: "100%", sm: "auto" },
    //             whiteSpace: "nowrap",
    //           }}
    //         >
    //           {primaryBtnLabel}
    //         </Button>
    //       )}

    //       {secondaryBtnLabel && (
    //         <Button
    //           startIcon={secondaryBtnIcon}
    //           sx={{
    //             bgcolor: "#000000",
    //             color: "#ffffff",
    //             px: 2,
    //             borderRadius: 2,
    //             width: { xs: "100%", sm: "auto" },
    //             whiteSpace: "nowrap",
    //           }}
    //         >
    //           {secondaryBtnLabel}
    //         </Button>
    //       )}
    //     </Box>
    //   )}
    // </Box>
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
