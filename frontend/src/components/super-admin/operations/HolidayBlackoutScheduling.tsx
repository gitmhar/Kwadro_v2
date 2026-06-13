import { useState } from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import { cueColors } from "../executive/cueColors";
import { Close, EventBusy } from "@mui/icons-material";

interface BlackoutEvent {
  id: string;
  name: string;
  details: string;
  severity: "error" | "outline";
}

const initialEvents: BlackoutEvent[] = [
  {
    id: "1",
    name: "NYE_EVENT_2024",
    details: "Dec 31 - Jan 01 • FULL BLOCKOUT",
    severity: "error",
  },
  {
    id: "2",
    name: "STAFF_RETREAT",
    details: "Feb 12 • 12:00 - 18:00",
    severity: "outline",
  },
  {
    id: "3",
    name: "MAINTENANCE_WINDOW_Q1",
    details: "Mar 05 • ALL SITES",
    severity: "error",
  },
];

export default function HolidayBlackoutScheduling() {
  const [events, setEvents] = useState<BlackoutEvent[]>(initialEvents);
  const [counter, setCounter] = useState(1);

  const addEntry = () => {
    const newEvent: BlackoutEvent = {
      id: String(Date.now()),
      name: `NEW_BLACKOUT_RULE_${counter}`,
      details: "TBD Date Range • SYSTEM BLOCKOUT",
      severity: counter % 2 === 0 ? "outline" : "error",
    };
    setEvents((prev) => [...prev, newEvent]);
    setCounter((prev) => prev + 1);
  };

  const removeEntry = (id: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  return (
    <Box
      sx={{
        backgroundColor: cueColors.surfaceContainer,
        border: `1px solid ${cueColors.outlineVariant}`,
        p: "16px",
        width: "100%",
        boxSizing: "border-box",
        transition: "background-color 150ms ease-in-out",
        "&:hover": {
          backgroundColor: "#232424",
        },
      }}
    >
      {/* Header bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "24px",
          borderBottom: `1px solid ${cueColors.outlineVariant}`,
          pb: "12px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <EventBusy sx={{ color: cueColors.primary}}/>
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.6875rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: cueColors.primary,
              margin: 0,
            }}
          >
            Holiday &amp; Blackout Scheduling
          </Typography>
        </Box>
        <ButtonBase
          onClick={addEntry}
          sx={{
            fontSize: "0.625rem",
            fontFamily: '"JetBrains Mono", monospace',
            color: cueColors.primary,
            textDecoration: "underline",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            "&:hover": {
              opacity: 0.8,
            },
          }}
        >
          ADD ENTRY
        </ButtonBase>
      </Box>

      {/* Events List */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {events.length === 0 ? (
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "0.75rem",
              color: cueColors.onSurfaceVariant,
              opacity: 0.6,
              textAlign: "center",
              py: "24px",
            }}
          >
            No active blackout periods scheduled.
          </Typography>
        ) : (
          events.map((event) => (
            <Box
              key={event.id}
              sx={{
                backgroundColor: cueColors.surfaceDim,
                borderLeft: `4px solid ${
                  event.severity === "error"
                    ? cueColors.error
                    : cueColors.outline
                }`,
                p: "12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    color: cueColors.primary,
                  }}
                >
                  {event.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "0.625rem",
                    color: cueColors.onSurfaceVariant,
                    opacity: 0.6,
                    mt: "2px",
                  }}
                >
                  {event.details}
                </Typography>
              </Box>
              <ButtonBase
                onClick={() => removeEntry(event.id)}
                className="material-symbols-outlined"
                sx={{
                  fontSize: "1.125rem",
                  color: cueColors.primary,
                  opacity: 0.4,
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Close/>
              </ButtonBase>
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
}
