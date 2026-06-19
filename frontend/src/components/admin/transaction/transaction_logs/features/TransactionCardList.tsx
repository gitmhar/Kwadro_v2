import { Stack } from "@mui/material";
import TransactionMobileCard from "./TransactionMobileCard";

interface TransactionRow {
  customer: string;
  email: string;
  table: string;
  amount: string;
  status: string;
  hasPermission: boolean;
}

export default function TransactionCardList({
  tableData,
}: {
  tableData: TransactionRow[];
}) {
  return (
    <Stack spacing={2} sx={{ mt: 2 }}>
      {tableData.map((transaction) => (
        <TransactionMobileCard
          key={transaction.email + transaction.table}
          transaction={transaction}
        />
      ))}
    </Stack>
  );
}
