import { Box, Container } from "@mui/material";
import type { ReactNode } from "react";

interface CheckoutLayoutProps {
  header: ReactNode;
  children: ReactNode;
}

export default function CheckoutLayout({
  header,
  children,
}: CheckoutLayoutProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 6, md: 4 },
      }}
    >
      <Container maxWidth="md">
        {header}
        {children}
      </Container>
    </Box>
  );
}
