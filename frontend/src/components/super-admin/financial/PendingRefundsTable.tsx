import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import { cueColors } from "../../../theme/dashboard/cueColors";
import RefundAuditTable from "./RefundAuditTable";

export interface RefundTransaction {
  id: string;
  terminal: string;
  amount: string;
}

export interface PendingRefundsTableProps {
  transactions: RefundTransaction[];
  onApprove: (id: string) => void;
}

export default function PendingRefundsTable({
  transactions = [
    { id: "TXN_99201-B", terminal: "LV-NODE-03", amount: "$420.00" },
    { id: "TXN_99288-C", terminal: "TK-SHINJUKU", amount: "$15.50" },
  ],
  onApprove,
}: PendingRefundsTableProps) {
  const pendingCount = String(transactions.length).padStart(2, "0");

  return (
    <>
      <RefundAuditTable
        icon={<AssignmentReturnIcon sx={{ fontSize: "20px" }} />}
        title="Audit Queue: Pending Refunds"
        badgeLabel={`${pendingCount} PENDING`}
        accentColor={cueColors.primary}
        textColor={cueColors.primary}
        headerBg={cueColors.surfaceContainerLow}
        rowHoverBg={cueColors.surfaceBright}
        actionLabel="APPROVE"
        actionVariant="filled"
        showHeaderRow
        transactions={transactions}
        onAction={(id) => onApprove && onApprove(id)}
      />
    </>
  );
}
