import { Box, Typography } from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import { cueColors } from "../../../theme/dashboard/cueColors";
import AdminCard from "../../ui/cards/AdminCard";
import SectionHeader from "../../ui/shared/SectionHeader";
import type { TimelineEntry } from "../../ui/shared/TimelineFeed";
import ScrollableContainer from "../../ui/shared/ScrollableContainer";
import TimelineFeed from "../../ui/shared/TimelineFeed";

interface ActivityItem {
  id: string;
  name: string;
  action: string;
  time: string;
  detail: string;
}

export default function StaffActivitySnapshot() {
  const entries: TimelineEntry[] = [
    {
      id: "1",
      header: (
        <>
          <strong>M. Chen</strong>{" "}
          <span style={{ opacity: 0.7 }}>checked in</span>
        </>
      ),
      subheader: "08:45",
      detail: "Location: HKG-Central",
    },
    {
      id: "2",
      header: (
        <>
          <strong>J. Smith</strong>{" "}
          <span style={{ opacity: 0.7 }}>initiated table maintenance</span>
        </>
      ),
      subheader: "09:12",
      detail: "Table: 12 | Status: Offline",
    },
    {
      id: "3",
      header: (
        <>
          <strong>L. Valenti</strong>{" "}
          <span style={{ opacity: 0.7 }}>processed refund</span>
        </>
      ),
      subheader: "09:44",
      detail: "Transaction ID: #99021-AX",
    },
    {
      id: "4",
      header: (
        <>
          <strong>A. Russo</strong>{" "}
          <span style={{ opacity: 0.7 }}>Shift Leader Override</span>
        </>
      ),
      subheader: "10:05",
      detail: "Action: POS Price Unlock",
    },
    {
      id: "5",
      header: (
        <>
          <strong>K. Tanaka</strong>{" "}
          <span style={{ opacity: 0.7 }}>session terminated</span>
        </>
      ),
      subheader: "10:15",
      detail: "Reason: Shift End | Location: TYO-Shibuya",
    },
  ];

  return (
    <AdminCard
      sx={{
        backgroundColor: cueColors.surfaceContainer,
        border: `1px solid ${cueColors.outlineVariant}`,
        borderRadius: 0,
        p: "24px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <SectionHeader
        variant="super-admin"
        icon={<BadgeIcon sx={{ color: cueColors.primary }} />}
        title="STAFF ACTIVITY SNAPSHOT"
        sx={{ borderBottom: "none", mb: 1, gap: "8px" }}
      />

      {/* Log Feed */}
      <ScrollableContainer sx={{}}>
        <TimelineFeed entries={entries} />
      </ScrollableContainer>
    </AdminCard>
  );
}
