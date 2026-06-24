import FlagIcon from "@mui/icons-material/Flag";
import RefundAuditTable from "./RefundAuditTable";

export interface FlaggedTransaction {
  id: string;
  terminal: string;
  amount: string;
}

export interface FlaggedRefundsTableProps {
  transactions: FlaggedTransaction[];
  onInvestigate: (id: string) => void;
}

export default function FlaggedRefundsTable({
  transactions = [
    { id: "TXN_99245-A", terminal: "LON-CENTRAL", amount: "$1,200.00" },
  ],
  onInvestigate,
}: FlaggedRefundsTableProps) {
  return (
    <>
      <RefundAuditTable
        icon={<FlagIcon sx={{ fontSize: "20px" }} />}
        title="Flagged Refunds"
        badgeLabel="CRITICAL AUDIT"
        accentColor="#ef4444"
        textColor="#fecaca"
        headerBg="rgba(239, 68, 68, 0.1)"
        rowHoverBg="rgba(239, 68, 68, 0.1)"
        rowBg="rgba(239, 68, 68, 0.05)"
        actionLabel="INVESTIGATE"
        actionVariant="outlined"
        showHeaderRow={false}
        transactions={transactions}
        onAction={(id) => onInvestigate && onInvestigate(id)}
      />
    </>
  );
}
