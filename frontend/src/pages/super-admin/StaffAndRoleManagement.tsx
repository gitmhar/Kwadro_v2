import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import StaffDirectory from "../../components/super-admin/staff/StaffDirectory";
import {
  PermissionMatrix,
  type SystemPermission,
} from "../../components/super-admin/staff/PermissionMatrix";
import {
  AreaControl,
  type Zone,
} from "../../components/super-admin/staff/AreaControl";
import {
  ActivityMonitor,
  type AuditLogEntry,
} from "../../components/super-admin/staff/ActivityMonitor";
import type { StaffMember } from "../../components/super-admin/staff/StaffDirectoryItem";

const INITIAL_STAFF: StaffMember[] = [
  {
    id: "1",
    name: "Marcus Thorne",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoYPkl0nHhsZkwDmA5S55h7tRqsjus_SPGLXLTkgPq9gK3e7MCmAIk8wIdidAIOElE1ZaUCzKSzePS2ig3MvE8If8DnOwjnRxq3sbak-BJXjrd7IeSH2vtxF-hZGlktkqiQ0peQZf-bf2AtjXRbHAjhnJW61linbYMT_Sqgj3FljHvoqH0KVa-sedan_t0VJA1Nv3UXxy0SBn1aYxQ6ShcOm5H0exJS43cQRd5a-k2mfA6H-cMVDui5p35aCAikuDiLJ5wNQsZd451",
    role: "REGIONAL OPS MANAGER",
    status: "ACTIVE",
    location: "NYC",
    shift: "DAY",
    kpi: 98.4,
  },
  {
    id: "2",
    name: "Elena Vance",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAj7Gl31Rm0LC0S3BJxHgLFtcSKZJmhPG3UCnwyG4hraVP1X4lo1uHx-OJh4CtVIVn6Y1AHhTNvOEdOsUbxskiDX34ujhinoFMGFOly4I8RTVMDKv4mHDy1ttwhovtloUkNLitPzgOOgUTeo-884Jwt8ibxs_cCNKv0o-gAaB2XxlR5mNWlVtVu_ssAkuDVD_kOejmCnRKyedoxdgMSj1kB1wQ83eY_fEF0krFOYFJKoYptZLDRW4hBm8RJK2yQZqugouS_bgCpOob3",
    role: "SENIOR FLOOR COMMANDER",
    status: "OFFLINE",
    location: "CHI",
    shift: "SWING",
    kpi: 82.1,
  },
  {
    id: "3",
    name: "Julian Ross",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6IDBtOKmkRjZklmHqL7-7l2vyzSxF54bZG1sUqnt5fxzqyjerOKwVKQFNU9WvXvM13oZVw3cdlKdlVLWbTdu50RA8qx7D_D2cO-hqWohEaMh7a1a0iq5NyPcAZrLVZrIvLiPuO5bWOXdpZmNdruXur9LaUHxSx9WFk60hVKjsBMWavaMTtEOJ4bNS_efvr3lvXz0jnHyTXVW5EsI7P2fDlO7GbEmo8vTillbD1ZNdFRERT3rwUKrrtip_iIU8kzYk3fnMJ3v_VHKv",
    role: "LOGISTICS COORD",
    status: "FLAGGED",
    location: "LDN",
    shift: "NIGHT",
    kpi: 44.9,
  },
];

const INITIAL_PERMISSIONS: Record<string, SystemPermission[]> = {
  "1": [
    {
      id: "1",
      name: "Override Table Locks",
      description: "Manual intervention on smart sensors",
      enabled: true,
    },
    {
      id: "2",
      name: "Financial Reconciliation",
      description: "Daily revenue balancing authorization",
      enabled: false,
    },
    {
      id: "3",
      name: "Surveillance Access",
      description: "Live HD-stream camera access",
      enabled: true,
    },
    {
      id: "4",
      name: "Manage Staff Accounts",
      description: "Modify operative system access",
      enabled: true,
    },
    {
      id: "5",
      name: "System Settings Modify",
      description: "Update environment and KRNL configs",
      enabled: false,
    },
  ],
  "2": [
    {
      id: "1",
      name: "Override Table Locks",
      description: "Manual intervention on smart sensors",
      enabled: true,
    },
    {
      id: "2",
      name: "Financial Reconciliation",
      description: "Daily revenue balancing authorization",
      enabled: false,
    },
    {
      id: "3",
      name: "Surveillance Access",
      description: "Live HD-stream camera access",
      enabled: true,
    },
    {
      id: "4",
      name: "Manage Staff Accounts",
      description: "Modify operative system access",
      enabled: false,
    },
    {
      id: "5",
      name: "System Settings Modify",
      description: "Update environment and KRNL configs",
      enabled: false,
    },
  ],
  "3": [
    {
      id: "1",
      name: "Override Table Locks",
      description: "Manual intervention on smart sensors",
      enabled: false,
    },
    {
      id: "2",
      name: "Financial Reconciliation",
      description: "Daily revenue balancing authorization",
      enabled: false,
    },
    {
      id: "3",
      name: "Surveillance Access",
      description: "Live HD-stream camera access",
      enabled: false,
    },
    {
      id: "4",
      name: "Manage Staff Accounts",
      description: "Modify operative system access",
      enabled: false,
    },
    {
      id: "5",
      name: "System Settings Modify",
      description: "Update environment and KRNL configs",
      enabled: false,
    },
  ],
};

const INITIAL_ZONES: Zone[] = [
  {
    id: "1",
    name: "VIP LOUNGE TABLES",
    subtitle: "4 UNITS ACTIVE",
    units: [
      { id: "vip1", name: "VIP_01", status: "ACTIVE" },
      { id: "vip2", name: "VIP_02", status: "ACTIVE" },
      { id: "vip3", name: "VIP_03", status: "ACTIVE" },
      { id: "vip4", name: "VIP_04", status: "OFFLINE" },
    ],
  },
  {
    id: "2",
    name: "MAIN FLOOR TABLES",
    subtitle: "12 UNITS ACTIVE",
    units: [
      { id: "main1", name: "MAIN_01", status: "ACTIVE" },
      { id: "main2", name: "MAIN_02", status: "ACTIVE" },
      { id: "main3", name: "MAIN_03", status: "ACTIVE" },
      { id: "main4", name: "MAIN_04", status: "ACTIVE" },
      { id: "main5", name: "MAIN_05", status: "ACTIVE" },
      { id: "main6", name: "NEW ASSIGNMENT", status: "NEW" },
    ],
  },
  {
    id: "3",
    name: "MEZZANINE DECK",
    subtitle: "OFFLINE",
    units: [
      { id: "mez1", name: "MEZ_A1", status: "OFFLINE" },
      { id: "mez2", name: "MEZ_A2", status: "OFFLINE" },
    ],
  },
];

const INITIAL_LOGS: AuditLogEntry[] = [
  {
    id: "1",
    name: "MARCUS THORNE",
    action: "UPDATE_PERMISSION_NODE",
    module: "AUTH_MANAGER",
    timestamp: "2023-11-24 14:22:01",
    riskLevel: "LOW",
  },
  {
    id: "2",
    name: "ELENA VANCE",
    action: "REMOTE_TABLE_LOCK_BYPASS",
    module: "FLOOR_CONTROL",
    timestamp: "2023-11-24 14:15:58",
    riskLevel: "ELEVATED",
  },
  {
    id: "3",
    name: "JULIAN ROSS",
    action: "FAILED_LOGIN_ATTEMPT (3)",
    module: "GATEWAY_ENTRY",
    timestamp: "2023-11-24 13:55:12",
    riskLevel: "CRITICAL",
  },
  {
    id: "4",
    name: "A. VOLLMER",
    action: "SYSTEM_CONFIG_DUMP",
    module: "KRNL_CORE",
    timestamp: "2023-11-24 13:40:44",
    riskLevel: "LOW",
  },
];

export const StaffAndRoleManagement: React.FC = () => {
  const [activeStaff, setActiveStaff] = useState<StaffMember>(INITIAL_STAFF[0]);
  const [permissionsState, setPermissionsState] =
    useState<Record<string, SystemPermission[]>>(INITIAL_PERMISSIONS);
  const [zones, setZones] = useState<Zone[]>(INITIAL_ZONES);
  const [logs, setLogs] = useState<AuditLogEntry[]>(INITIAL_LOGS);

  const handleSelectStaff = (staff: StaffMember) => {
    setActiveStaff(staff);
  };

  const handleTogglePermission = (permissionId: string) => {
    setPermissionsState((prev) => {
      const staffPerms = prev[activeStaff.id] || [];
      const updatedPerms = staffPerms.map((p) =>
        p.id === permissionId ? { ...p, enabled: !p.enabled } : p,
      );
      return {
        ...prev,
        [activeStaff.id]: updatedPerms,
      };
    });
  };

  const handleResetPermissions = () => {
    setPermissionsState((prev) => ({
      ...prev,
      [activeStaff.id]: INITIAL_PERMISSIONS[activeStaff.id].map((p) => ({
        ...p,
      })),
    }));
  };

  const handleCommitPermissions = () => {
    const activePerms = permissionsState[activeStaff.id] || [];
    const timestamp = new Date()
      .toISOString()
      .replace("T", " ")
      .substring(0, 19);

    const newLog: AuditLogEntry = {
      id: Math.random().toString(),
      name: activeStaff.name.toUpperCase(),
      action: "COMMIT_PERMISSION_UPDATE",
      module: "AUTH_MANAGER",
      timestamp,
      riskLevel: "LOW",
    };

    setLogs((prev) => [newLog, ...prev]);
  };

  const handleAuthorizeNewZone = () => {
    setZones((prev) => {
      return prev.map((zone) => {
        if (zone.id === "2") {
          const nextIndex = zone.units.length;
          return {
            ...zone,
            units: [
              ...zone.units,
              {
                id: `main_new_${nextIndex}`,
                name: `MAIN_0${nextIndex}`,
                status: "NEW",
              },
            ],
          };
        }
        return zone;
      });
    });
  };

  const handleViewAllLogs = () => {
    // Presentational callback logic
  };

  const activeStaffPermissions = permissionsState[activeStaff.id] || [];

  return (
    <Box sx={{ p: 4, width: "100%", boxSizing: "border-box" }}>
      <Grid container spacing={3}>
        {/* Left Column: Staff Directory */}
        <Grid size={{ xs: 12, xl: 3 }}>
          <Box
            sx={{
              height: { xl: "calc(100vh - 160px)" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <StaffDirectory
              staffList={INITIAL_STAFF}
              activeStaffId={activeStaff.id}
              onSelectStaff={handleSelectStaff}
              totalActiveCount={1248}
              pendingRequestsCount={14}
            />
          </Box>
        </Grid>

        {/* Center Column: Permission Architecture */}
        <Grid size={{ xs: 12, md: 7, xl: 5 }}>
          <PermissionMatrix
            accessLevelName={activeStaff.role}
            permissions={activeStaffPermissions}
            onTogglePermission={handleTogglePermission}
            onReset={handleResetPermissions}
            onCommit={handleCommitPermissions}
          />
        </Grid>

        {/* Right Column: Area Control / Zones */}
        <Grid size={{ xs: 12, md: 5, xl: 4 }}>
          <AreaControl
            zones={zones}
            onAuthorizeNewZone={handleAuthorizeNewZone}
          />
        </Grid>

        {/* Bottom Column: Admin Activity Monitoring */}
        <Grid size={{ xs: 12 }}>
          <ActivityMonitor logs={logs} onViewAllLogs={handleViewAllLogs} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default StaffAndRoleManagement;
