import { useState } from "react";
import { Box, ButtonBase } from "@mui/material";
import { cueColors } from "../../../../theme/dashboard/cueColors";
import { EventBusy } from "@mui/icons-material";
import AdminCard from "../../../ui/cards/AdminCard";
import SectionHeader from "../../../ui/shared/SectionHeader";
import EmptyState from "../../../ui/shared/EmptyState";
import BlackoutEventItem from "./BlackoutEventItem";

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
    <AdminCard
      sx={{
        backgroundColor: cueColors.surfaceContainer,
        border: `1px solid ${cueColors.outlineVariant}`,
        p: "16px",
        width: "100%",
        boxSizing: "border-box",
        borderRadius: 0,
        transition: "background-color 150ms ease-in-out",
        "&:hover": {
          backgroundColor: "#232424",
        },
      }}
    >
      {/* Header bar */}
      <SectionHeader
        variant="super-admin"
        icon={<EventBusy sx={{ color: cueColors.primary }} />}
        title="Holiday &amp; Blackout Scheduling"
        rightElement={
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
            {" "}
            ADD ENTRY
          </ButtonBase>
        }
      />

      {/* Events List */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {events.length === 0 ? (
          <EmptyState message="No active blackout periods scheduled." />
        ) : (
          events.map((event) => (
            <BlackoutEventItem
              key={event.id}
              event={event}
              onRemove={removeEntry}
            />
          ))
        )}
      </Box>
    </AdminCard>
  );
}
