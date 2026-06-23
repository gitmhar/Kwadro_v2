import { useState } from "react";
import { Box, Grid, Stack } from "@mui/material";

// Icons for Telemetry Cards
import SpeedIcon from "@mui/icons-material/Speed";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ApiIcon from "@mui/icons-material/Api";
import CloudDoneIcon from "@mui/icons-material/CloudDone";

// Sub-components
import { TelemetryCard } from "../../components/super-admin/system/TelemetryCard";
import {
  ApiManagement,
  type ApiEndpoint,
} from "../../components/super-admin/system/ApiManagement";
import {
  CommunicationsMatrix,
  type CommMatrixItem,
} from "../../components/super-admin/system/CommunicationsMatrix";
import { MaintenanceMode } from "../../components/super-admin/system/MaintenanceMode";
import {
  DisasterRecovery,
  type RestorePoint,
} from "../../components/super-admin/system/DisasterRecovery";
import { LocalizationRules } from "../../components/super-admin/system/LocalizationRules";
import { OperationalLogFooter } from "../../components/super-admin/system/OperationalLogFooter";

export default function SystemManagement() {
  // State for Database Freeze (Maintenance Mode)
  const [isFrozen, setIsFrozen] = useState<boolean>(false);

  // State for Disaster Recovery Snapshot lists
  const [restorePoints, setRestorePoints] = useState<RestorePoint[]>([
    {
      timestamp: "2023-10-27 04:00:01",
      snapshotId: "SYS_AUTO_BACKUP_20231027_0400",
      size: "2.4 GB",
      integrity: "VERIFIED",
    },
    {
      timestamp: "2023-10-26 04:00:05",
      snapshotId: "SYS_AUTO_BACKUP_20231026_0400",
      size: "2.4 GB",
      integrity: "VERIFIED",
    },
    {
      timestamp: "2023-10-25 23:42:00",
      snapshotId: "SYS_MANUAL_PRE_MIGRATION",
      size: "2.3 GB",
      integrity: "VERIFIED",
    },
  ]);

  // State for API endpoints (allowing demo interactions)
  const [apiEndpoints, setApiEndpoints] = useState<ApiEndpoint[]>([
    { name: "Table Control System", endpoint: "/v2/tables", status: "ok" },
    { name: "Point of Sale Bridge", endpoint: "/v2/pos", status: "warning" },
    { name: "Customer Loyalty Sync", endpoint: "/v1/loyalty", status: "ok" },
  ]);

  // State for Comm Gateway matrix
  const [commItems, setCommItems] = useState<CommMatrixItem[]>([
    {
      name: "Postmark Email Relay",
      status: "OPERATIONAL",
      statusColor: "#22c55e",
      percentage: 94,
      detail: "SMTP: smtp.postmarkapp.com (587)",
    },
    {
      name: "Twilio SMS Gateway",
      status: "ACTIVE",
      statusColor: "#22c55e",
      percentage: 88,
      detail: "SID: AC998273...442",
    },
  ]);

  // State for current operational logs
  const [lastSyncTime, setLastSyncTime] = useState<string>("14:02:44");
  const [coreStatus, setCoreStatus] = useState<string>("STABLE");

  // Handle Create Snapshot action
  const handleCreateSnapshot = () => {
    const now = new Date();
    const formattedDate = now.toISOString().replace("T", " ").substring(0, 19);
    const snapId = `SYS_MANUAL_SNAP_${now.getFullYear()}${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}_${now
      .getHours()
      .toString()
      .padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}`;

    const newSnapshot: RestorePoint = {
      timestamp: formattedDate,
      snapshotId: snapId,
      size: "2.4 GB",
      integrity: "VERIFIED",
    };

    setRestorePoints([newSnapshot, ...restorePoints]);
    setLastSyncTime(now.toTimeString().split(" ")[0]);
  };

  // Handle Rollback snapshot
  const handleRollback = (snapshotId: string) => {
    alert(`Initiating system rollback to snapshot: ${snapshotId}`);
    const now = new Date();
    setLastSyncTime(now.toTimeString().split(" ")[0]);
  };

  // Handle Refresh state updates (demo simulation)
  const handleRefreshNodeStates = () => {
    const updated = commItems.map((item) => ({
      ...item,
      percentage: Math.min(
        100,
        Math.max(10, item.percentage + Math.floor(Math.random() * 21) - 10),
      ),
    }));
    setCommItems(updated);
    const now = new Date();
    setLastSyncTime(now.toTimeString().split(" ")[0]);
  };

  // Handle applying rule configs
  const handleApplySettings = (settings: {
    timezone: string;
    currency: string;
    rounding: number;
  }) => {
    alert(
      `Applied global configurations:\nTimezone: ${settings.timezone}\nCurrency: ${settings.currency}\nRounding: ${settings.rounding}m`,
    );
    const now = new Date();
    setLastSyncTime(now.toTimeString().split(" ")[0]);
  };

  // Handle toggle freeze state
  const handleToggleFreeze = (frozen: boolean) => {
    setIsFrozen(frozen);
    setCoreStatus(frozen ? "FROZEN" : "STABLE");
    const now = new Date();
    setLastSyncTime(now.toTimeString().split(" ")[0]);
  };

  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        minHeight: "100%",
        bgcolor: "#121414",
        p: 4,
        boxSizing: "border-box",
      }}
    >
      <Stack spacing={5}>
        {/* Row 1: Infrastructure Telemetry Core */}
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <TelemetryCard
              title="Database Cluster"
              value="12ms"
              subValue="CORE_LATENCY_OPTIMIZED"
              icon={<SpeedIcon sx={{ fontSize: 14 }} />}
              statusColor="#22c55e"
              pulse
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <TelemetryCard
              title="Kiosk WebSocket"
              value="4,210"
              subValue="ACTIVE CONNECTIONS"
              icon={<SwapVertIcon sx={{ fontSize: 14 }} />}
              statusColor="#22c55e"
              pulse
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <TelemetryCard
              title="Gateway Access"
              value="99.9%"
              subValue="REST API UPTIME (24H)"
              icon={<ApiIcon sx={{ fontSize: 14 }} />}
              statusColor="#22c55e"
              pulse
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <TelemetryCard
              title="Data Redundancy"
              value="Verified"
              subValue="SYNC_COMPLETED: 14 MIN AGO"
              icon={<CloudDoneIcon sx={{ fontSize: 14 }} />}
              statusColor="#3b82f6"
            />
          </Grid>
        </Grid>

        {/* Row 2: Integrated System Nodes & Operations */}
        <Grid container spacing={3} alignItems="stretch">
          <Grid size={{ xs: 12, md: 4 }}>
            <ApiManagement endpoints={apiEndpoints} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CommunicationsMatrix
              items={commItems}
              onRefresh={handleRefreshNodeStates}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MaintenanceMode
              isFrozen={isFrozen}
              onToggleFreeze={handleToggleFreeze}
            />
          </Grid>
        </Grid>

        {/* Row 3: Automated Disaster Recovery */}
        <Box>
          <DisasterRecovery
            restorePoints={restorePoints}
            onCreateSnapshot={handleCreateSnapshot}
            onRollback={handleRollback}
          />
        </Box>

        {/* Row 4: Global Localization & Rule Constraints */}
        <Box>
          <LocalizationRules
            onApplySettings={handleApplySettings}
            onUploadLogo={(file) =>
              alert(`Uploaded system logo file: ${file.name}`)
            }
          />
        </Box>

        {/* Operational Log Footer */}
        <OperationalLogFooter
          coreStatus={coreStatus}
          lastSync={lastSyncTime}
          activeUser="SUPER_ADMIN_01"
          onTerminalClick={() => alert("Terminal console opened.")}
          onHelpClick={() => alert("System help guide opened.")}
        />
      </Stack>
    </Box>
  );
}
