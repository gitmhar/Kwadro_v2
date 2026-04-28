import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import type { ReactNode } from "react";

type Column<T> = {
  field: keyof T;
  headerName: string;
  width?: string | number;
  align?: "left" | "center" | "right";
  render?: (row: T) => ReactNode;
};

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
}

export default function DataTable<T>({ columns, data }: DataTableProps<T>) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650}}>
        {/* Table Header */}
        <TableHead>
          {/* Rows */}
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={String(col.field)}
                align={col.align || "left"}
                sx={{
                  color: "#a3a3a3",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: 1,
                  borderBottom: "1px solid #f0f0f0",
                  py: 3,
                  width: col.width || "auto",
                }}
              >
                {col.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {/* Table Body */}
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i} sx={{ "&:last-child td": { border: 0 } }}>
              {columns.map((col) => (
                <TableCell
                  key={String(col.field)}
                  align={col.align || "left"}
                  sx={{ py: 2, width: col.width || "auto" }}
                >
                    {col.render ? col.render(row) : (row[col.field] as ReactNode)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
