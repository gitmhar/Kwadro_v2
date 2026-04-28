import { 
  Box, 
  Typography, 
  Stack, 
  TextField, 
  InputAdornment, 
  Avatar, 
  Button, 
  IconButton 
} from "@mui/material";
import { Search, Edit } from "@mui/icons-material";

// Ensure this matches your data interface
interface TransactionRow {
  customer: string;
  email: string;
  table: string;
  amount: string;
  status: string;
  hasPermission: boolean;
}

export default function TransactionCardList({ tableData }: { tableData: TransactionRow[] }) {
  return (
    <Stack spacing={2} sx={{ mt: 2 }}>
      {tableData.map((row, i) => (
        <Box
          key={i}
          sx={{
            p: 3,
            borderRadius: "24px",
            bgcolor: "#fff",
            border: "1px solid #f0f0f0",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.02)"
          }}
        >
          {/* Top Row: Identity & Amount */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar
                sx={{
                  bgcolor: "#f0f0f0",
                  color: "#474747",
                  width: 44,
                  height: 44,
                  fontWeight: 700,
                  fontSize: "1rem"
                }}
              >
                {row.customer ? row.customer.split(" ").map((n) => n[0]).join("") : "??"}
              </Avatar>
              <Box>
                <Typography sx={{ fontWeight: 700, color: "#1a1c1c", fontSize: "1rem" }}>
                  {row.customer}
                </Typography>
                <Typography sx={{ color: "#a3a3a3", fontSize: "0.75rem", fontWeight: 500 }}>
                  {row.table} • 14:20 PM
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ textAlign: "right" }}>
              <Typography sx={{ fontWeight: 800, fontSize: "1.1rem", color: "#1a1c1c" }}>
                {row.amount}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 0.5, mt: 0.5 }}>
                <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#000" }} />
                <Typography sx={{ fontWeight: 800, fontSize: "0.65rem", letterSpacing: 0.5 }}>
                  {row.status.toUpperCase()}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ height: "1px", bgcolor: "#f0f0f0", mb: 3 }} />

          {/* Bottom Row: Action Buttons */}
          <Box sx={{ display: "flex", gap: 1.5 }}>
            <Button
              fullWidth
              variant="contained"
              disableElevation
              disabled={!row.hasPermission}
              sx={{
                bgcolor: "#000",
                color: "#fff",
                borderRadius: "12px",
                py: 1.5,
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "none",
                "&.Mui-disabled": {
                  bgcolor: "#f5f5f5",
                  color: "#cccccc",
                  pointerEvents: "auto",
                  cursor: "not-allowed"
                }
              }}
            >
              Issue Refund
            </Button>
            
            <IconButton
              disabled={!row.hasPermission}
              sx={{
                bgcolor: "#f5f5f5",
                borderRadius: "12px",
                width: 48,
                "&.Mui-disabled": {
                  pointerEvents: "auto",
                  cursor: "not-allowed"
                }
              }}
            >
              <Edit sx={{ fontSize: 18, color: row.hasPermission ? "#000" : "#cccccc" }} />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Stack>
  );
}