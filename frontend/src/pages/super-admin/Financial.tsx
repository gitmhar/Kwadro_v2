import { useState } from "react";
import { Box, Grid } from "@mui/material";
import GrossRevenueCard from "../../components/super-admin/financial/GrossRevenueCard";
import NetCashflowCard from "../../components/super-admin/financial/NetCashflowCard";
import ProfitabilityCard from "../../components/super-admin/financial/ProfitabilityCard";
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

export default function Financial() {
  // 1. Pending Refunds State
  const [pendingRefunds, setPendingRefunds] = useState<RefundTransaction[]>([
    { id: "TXN_99201-B", terminal: "LV-NODE-03", amount: "$420.00" },
    { id: "TXN_99288-C", terminal: "TK-SHINJUKU", amount: "$15.50" },
  ]);

  // 2. Flagged Refunds State
  const [flaggedRefunds] = useState<FlaggedTransaction[]>([
    { id: "TXN_99245-A", terminal: "LON-CENTRAL", amount: "$1,200.00" },
  ]);

  // 3. Suspicious Activity Feed State
  const [activities, setActivities] = useState<ActivityItem[]>([
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
  ]);

  // Callback: Approve Refund
  const handleApproveRefund = (id: string) => {
    setPendingRefunds((prev) => prev.filter((txn) => txn.id !== id));
  };

  // Callback: Investigate Refund
  const handleInvestigateRefund = (id: string) => {
    alert(`Initiating critical audit investigation for transaction: ${id}`);
  };

  // Callback: Activity Action
  const handleActivityAction = (id: string, actionText: string) => {
    if (actionText === "DISMISS") {
      setActivities((prev) => prev.filter((act) => act.id !== id));
    } else {
      alert(`Action: "${actionText}" triggered for node activity: ${id}`);
    }
  };

  // Callback: Export
  const handleExport = (id: string) => {
    const target = [
      { id: "1", label: "Daily Ledger (CSV)" },
      { id: "2", label: "Tax Compliance (PDF)" },
      { id: "3", label: "Audit Logs (ALL)" },
    ].find((o) => o.id === id);
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
      <Grid
        container
        spacing={3}
        columns={12}
        sx={{
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        <Grid
          size={{ xs: 12, lg: 4 }}
          sx={{ width: "100%", boxSizing: "border-box" }}
        >
          <GrossRevenueCard
            amount="$142,890.42"
            changePercent="+12.4%"
            history={[25, 50, 37.5, 75, 100, 62.5]}
          />
        </Grid>
        <Grid
          size={{ xs: 12, lg: 4 }}
          sx={{ width: "100%", boxSizing: "border-box" }}
        >
          <NetCashflowCard velocity="$4.2k/hr" percentage={65} />
        </Grid>
        <Grid
          size={{ xs: 12, lg: 4 }}
          sx={{ width: "100%", boxSizing: "border-box" }}
        >
          <ProfitabilityCard
            percentage="88.4%"
            statusText="TARGET REACHED"
            history={[
              { heightPercent: 40, isHighlight: false },
              { heightPercent: 60, isHighlight: false },
              { heightPercent: 85, isHighlight: true },
              { heightPercent: 55, isHighlight: false },
              { heightPercent: 70, isHighlight: false },
              { heightPercent: 95, isHighlight: true },
              { heightPercent: 50, isHighlight: false },
            ]}
          />
        </Grid>
      </Grid>

      {/* Row 2: Refund Queue & Suspicious Activity Feed */}
      <Grid
        container
        spacing={3}
        columns={12}
        sx={{
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Left Columns (Audit / Refund Tables) */}
        <Grid
          size={{ xs: 12, lg: 8 }}
          sx={{
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
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

        {/* Right Columns (Security Feed & Export Options) */}
        <Grid
          size={{ xs: 12, lg: 4 }}
          sx={{
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <SuspiciousActivityFeed
            activities={activities}
            onAction={handleActivityAction}
          />
          <ExportCenter
            onExport={handleExport}
            options={[
              { id: "1", label: "Daily Ledger (CSV)", iconType: "ledger" },
              { id: "2", label: "Tax Compliance (PDF)", iconType: "tax" },
              { id: "3", label: "Audit Logs (ALL)", iconType: "audit" },
            ]}
          />
        </Grid>
      </Grid>

      {/* Row 3: Payment Gateway Health */}
      <Box sx={{ width: "100%", boxSizing: "border-box" }}>
        <PaymentGatewayHealth />
      </Box>
    </Box>
  );
}
