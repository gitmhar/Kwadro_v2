import { useState } from "react";
import { Box, Grid } from "@mui/material";
import PendingRefundsTable, {
  type RefundTransaction,
} from "../../components/super-admin/financial/PendingRefundsTable";
import FlaggedRefundsTable, {
  type FlaggedTransaction,
} from "../../components/super-admin/financial/FlaggedRefundsTable";
import SuspiciousActivityFeed, {
  type ActivityItem,
} from "../../components/super-admin/financial/SuspiciousActivityFeed";
import ExportCenter from "../../components/super-admin/financial/ExportCenter";
import PaymentGatewayHealth from "../../components/super-admin/financial/PaymentGatewayHealth";
import FinancialKpiGrid from "../../components/super-admin/financial/FinancialKpiGrid";

const initialPendingRefunds: RefundTransaction[] = [
  { id: "TXN_99201-B", terminal: "LV-NODE-03", amount: "$420.00" },
  { id: "TXN_99288-C", terminal: "TK-SHINJUKU", amount: "$15.50" },
];

const initialFlaggedRefunds: FlaggedTransaction[] = [
  { id: "TXN_99245-A", terminal: "LON-CENTRAL", amount: "$1,200.00" },
];

const initialActivities: ActivityItem[] = [
  {
    id: "1",
    type: "UNUSUAL CUSTOMER ACTIVITY",
    node: "0x8F4A...B2C",
    description:
      "High-velocity micro-transactions from singular IP in Chicago. Pattern suggests node spoofing.",
    riskScore: 0.89,
    isCritical: true,
    actionText: "VIEW MAP",
  },
  {
    id: "2",
    type: "TERMINAL MISMATCH",
    node: "0x2D1F...E3D",
    description:
      "Physical location sensor discrepancy on Node-92. Audit recommended.",
    riskScore: 0.64,
    isCritical: false,
    actionText: "DISMISS",
    opacity: 0.6,
  },
];

const exportOptions = [
  { id: "1", label: "Daily Ledger (CSV)", iconType: "ledger" as const },
  { id: "2", label: "Tax Compliance (PDF)", iconType: "tax" as const },
  { id: "3", label: "Audit Logs (ALL)", iconType: "audit" as const },
];

export default function Financial() {
  const [pendingRefunds, setPendingRefunds] = useState(initialPendingRefunds);
  const [flaggedRefunds] = useState(initialFlaggedRefunds);
  const [activities, setActivities] = useState(initialActivities);

  const handleApproveRefund = (id: string) => {
    setPendingRefunds((prev) => prev.filter((txn) => txn.id !== id));
  };

  const handleInvestigateRefund = (id: string) => {
    alert(`Initiating critical audit investigation for transaction: ${id}`);
  };

  const handleActivityAction = (id: string, actionText: string) => {
    if (actionText === "DISMISS") {
      setActivities((prev) => prev.filter((act) => act.id !== id));
    } else {
      alert(`Action: "${actionText}" triggered for node activity: ${id}`);
    }
  };

  const handleExport = (id: string) => {
    const target = exportOptions.find((o) => o.id === id);
    if (target) {
      alert(`Downloading report export: ${target.label}`);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        pb: "40px",
        overflowX: "hidden",
      }}
    >
      {/* Row 1: Revenue Analytics */}
      <FinancialKpiGrid />

      {/* Row 2: Refund Queue & Sidebar */}
      <Grid container spacing={3} columns={12}>
        <Grid
          size={{ xs: 12, lg: 8 }}
          sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          <PendingRefundsTable
            transactions={pendingRefunds}
            onApprove={handleApproveRefund}
          />
          <FlaggedRefundsTable
            transactions={flaggedRefunds}
            onInvestigate={handleInvestigateRefund}
          />
        </Grid>

        <Grid
          size={{ xs: 12, lg: 4 }}
          sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          <SuspiciousActivityFeed
            activities={activities}
            onAction={handleActivityAction}
          />
          <ExportCenter
            options={exportOptions}
            onExport={handleExport}
          />
        </Grid>
      </Grid>

      {/* Row 3: Payment Gateway Health */}
      <PaymentGatewayHealth />
    </Box>
  );
}