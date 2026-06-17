import { Box } from "@mui/material";
import TableMonitorCard from "./TableMonitorCard";

interface TableData {
  tableNumber: number;
  status?: string;
}

interface TableMonitorGridProps {
  tables?: TableData[];
  onAssign?: (tableNumber: number) => void;
}

const defaultTables: TableData[] = Array.from({ length: 12 }, (_, i) => ({
  tableNumber: i + 1,
  status: "Available",
}));

export default function TableMonitorGrid({
  tables = defaultTables,
  onAssign,
}: TableMonitorGridProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(6, 1fr)",
        },
        gap: 2,
      }}
    >
      {tables.map((table) => (
        <TableMonitorCard
          key={table.tableNumber}
          tableNumber={table.tableNumber}
          status={table.status}
          onAssign={onAssign}
        />
      ))}
    </Box>
  );
}
