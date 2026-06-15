import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";

export type Column<T> = {
  field: keyof T;
  headerName: string;
  width?: string | number;
  align?: "left" | "center" | "right";
  render?: (row: T, col?: any, toggleFn?: (arg0: any) => void) => ReactNode;
};

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  headerSx?: SxProps<Theme>;
  cellSx?: (row: T, col: Column<T>) => SxProps<Theme>;
  rowDivider?: string;
  tableSx?: SxProps<Theme>;
}

export default function DataTable<T>({
  columns,
  data,
  headerSx,
  cellSx,
  rowDivider,
  tableSx,
}: DataTableProps<T>) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650, ...tableSx }}>
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
                  ...headerSx,
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
              {columns.map((col) => {
                const baseSx = {
                  py: 2,
                  width: col.width || "auto",
                  borderBottom: rowDivider || undefined,
                  ...(cellSx ? cellSx(row, col) : {}),
                };
                return (
                  <TableCell
                    key={String(col.field)}
                    align={col.align || "left"}
                    sx={baseSx}
                  >
                    {col.render
                      ? col.render(row)
                      : (row[col.field] as ReactNode)}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
