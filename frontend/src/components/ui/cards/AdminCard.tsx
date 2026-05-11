import { Card, type CardProps } from "@mui/material";
import type { ReactNode } from "react";

interface AdminCardProps extends CardProps {
  children: ReactNode;
}

export default function AdminCard({
  children,
  sx = [],
  ...props
}: AdminCardProps) {
  return (
    <Card
      {...props}
      sx={[
        {
          width: "100%",
          // maxWidth: "none",
          bgcolor: "#ffffff",
          color: "#000000",
          borderRadius: "24px",
          boxShadow: "none",
          p: 6,
          position: "relative",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Card>
  );
}
