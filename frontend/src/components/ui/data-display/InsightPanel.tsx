import { Box, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import InsightRow from "./InsightRow";

interface InsightRowData {
  label: string;
  value: string;
  valueColor?: string;
}

interface InsightPanelProps {
  title?: string;
  rows: InsightRowData[];
  tip?: {
    title: string;
    message: string;
  };
  renderRow?: (row: InsightRowData) => ReactNode;
}

export default function InsightPanel({
  title = "Traffic Insights",
  rows,
  tip,
  renderRow,
}: InsightPanelProps) {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "320px" },
        p: { xs: 2.5, sm: 4 },
        borderTop: { xs: "1px solid #f0f0f0", md: "none" },
        borderLeft: { md: "1px solid #f0f0f0" },
        bgcolor: "#f3f3f3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography
          variant="overline"
          sx={{
            color: "#a3a3a3",
            fontWeight: 800,
            letterSpacing: 1.5,
            fontSize: "0.7rem",
          }}
        >
          {title}
        </Typography>

        <Stack spacing={2.5} sx={{ my: 3 }}>
          {rows.map((row) =>
            renderRow ? (
              renderRow(row)
            ) : (
              <InsightRow
                key={row.label}
                label={row.label}
                value={row.value}
                valueColor={row.valueColor || "#1A1C1C"}
              />
            ),
          )}
        </Stack>
      </Box>

      {/* Smart Tip Box */}
      {tip && (
        <Box
          sx={{
            bgcolor: "#fff",
            p: 2.5,
            borderRadius: "18px",
            border: "1px solid #e5e5e5",
            boxShadow: "none",
            mt: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 800,
              fontSize: "0.8rem",
              color: "#1a1c1c",
              mb: 0.5,
            }}
          >
            {tip.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", fontSize: "0.75rem", lineHeight: 1.4 }}
          >
            {tip.message}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
