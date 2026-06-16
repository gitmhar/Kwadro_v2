import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { cueColors } from "../../../theme/dashboard/cueColors";

interface ScrollableContainerProps {
  children: ReactNode;
  direction?: "vertical" | "horizontal";
  minWidth?: string | { xs: string; md?: string };
  maxHeight?: string | { xs: string; xl?: string };
  sx?: object;
}

export default function ScrollableContainer({
  children,
  direction = "vertical",
  minWidth,
  maxHeight,
  sx,
}: ScrollableContainerProps) {
  const isHorizontal = direction === "horizontal";

  return (
    <Box
      sx={{
        overflowX: isHorizontal ? "auto" : "hidden",
        overflowY: isHorizontal ? "hidden" : "auto",
        maxHeight: isHorizontal ? undefined : maxHeight,
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        "&::-webkit-scrollbar": {
          width: isHorizontal ? undefined : "4px",
          height: isHorizontal ? "4px" : undefined,
        },
        "&::-webkit-scrollbar-track": { background: cueColors.surface },
        "&::-webkit-scrollbar-thumb": { background: "#2E2E2E" },
        ...sx,
      }}
    >
      {isHorizontal && minWidth ? (
        <Box
          sx={{
            minWidth: minWidth,
            display: "flex",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {children}
        </Box>
      ) : (
        children
      )}
    </Box>
  );
}
