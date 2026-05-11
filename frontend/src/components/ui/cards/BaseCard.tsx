import { Card, type CardProps } from "@mui/material";
import type { ReactNode } from "react";

interface BaseCardProps extends CardProps {
  children: ReactNode;
}

export default function BaseCard({
  children,
  sx = [],
  ...props
}: BaseCardProps) {
  return (
    <Card
      {...props}
      sx={[
        {
          width: "100%", // Take up all available space
          maxWidth: "none",
          bgcolor: "#191C1F",
          borderRadius: 8,
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          color: "white",
          p: 3,
          position: "relative",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Card>
  );
}
