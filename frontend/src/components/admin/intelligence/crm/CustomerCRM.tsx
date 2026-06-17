import {
  Box,
  Button,
  Divider,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AdminCard from "../../../ui/cards/AdminCard";
import { Campaign, Download, FilterList } from "@mui/icons-material";
import SectionHeader from "../../../ui/shared/SectionHeader";
import DataTable from "../../../ui/data-display/DataTable";
import SearchInput from "../../../ui/inputs/SearchInput";
import UserIdentity from "../../../ui/data-display/UserIdentity";
import StatusChip from "../../../ui/data-display/StatusChip";
import CustomerMobileCard from "./features/CustomerMobileCard";
import type { CustomerData } from "../../../../types/crmRows";

const tableData: CustomerData[] = [
  {
    name: "Client 1",
    email: "client#1@billiard.com",
    value: "$660.00",
    visits: "3 visits",
    lastActive: "1 hour ago",
    status: "Occasional",
  },
  {
    name: "Client 2",
    email: "client#2@billiard.com",
    value: "$11660.00",
    visits: "3 visits",
    lastActive: "1 hour ago",
    status: "Regular",
  },
  {
    name: "Client 3",
    email: "client#3@billiard.com",
    value: "$61650.00",
    visits: "3 visits",
    lastActive: "1 hour ago",
    status: "Top Tier",
  },
  {
    name: "Client 4",
    email: "client#4@billiard.com",
    value: "$62630.00",
    visits: "3 visits",
    lastActive: "1 hour ago",
    status: "Top Tier",
  },
  {
    name: "Client 5",
    email: "client#5@billiard.com",
    value: "$3.00",
    visits: "3 visits",
    lastActive: "1 hour ago",
    status: "Newbie",
  },
];

const desktopTable = [
  {
    field: "name",
    headerName: "IDENTITY",
    render: (row: CustomerData) => (
      <UserIdentity name={row.name} email={row.email} />
    ),
  },
  {
    field: "value",
    headerName: "LIFETIME VALUE",
    render: (row: CustomerData) => (
      <Typography sx={{ fontWeight: 700, color: "#474747" }}>
        {row.value}
      </Typography>
    ),
  },
  {
    field: "visits",
    headerName: "VISITS",
    render: (row: CustomerData) => (
      <Typography sx={{ color: "#474747" }}>{row.visits}</Typography>
    ),
  },
  {
    field: "lastActive",
    headerName: "LAST ACTIVE",
    render: (row: CustomerData) => (
      <Typography sx={{ color: "#474747" }}>{row.lastActive}</Typography>
    ),
  },
  {
    field: "status",
    headerName: "STATUS",
    render: (row: CustomerData) => (
      <StatusChip
        label={row.status}
        bg="#F0F0F0"
        color="#474747"
        shape="pill"
      />
    ),
  },
];

const filterOptions = [
  "ALL CUSTOMERS",
  "TOP TIER",
  "REGULAR",
  "OCCASIONAL",
  "NEWBIE",
];

export default function CustomerCRM() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleEmailBlast = (customer: CustomerData) => {
    console.log("Email Blasted to:", customer.email);
  };
  return (
    <>
      {/* Header */}
      <SectionHeader
        title="Customer CRM"
        subtitle="Intelligence"
        primaryBtnLabel="Export CSV"
        secondaryBtnLabel="Send Email Blast"
        primaryBtnIcon={<Download />}
        secondaryBtnIcon={<Campaign />}
        hideButtonOnMobile={true}
      />
      {/* Mobile View */}
      {isMobile ? (
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Box>
            {/* Search Bar */}
            <SearchInput placeholder="Search database by email, name or ID" />
          </Box>
          {tableData.map((row) => (
            <CustomerMobileCard
              key={row.email}
              customer={row}
              onEmailBlast={handleEmailBlast}
            />
          ))}
          <Button
            fullWidth
            startIcon={<Download />}
            sx={{
              display: { xs: "flex", sm: "none" },
              mt: 3,
              bgcolor: "#f3f3f3",
              color: "#474747",
              py: 2,
              borderRadius: "16px",
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            EXPORT CRM
          </Button>
        </Stack>
      ) : (
        // Desktop
        <AdminCard
          sx={{
            p: 0,
            overflow: "hidden",
            height: "100%",
            width: "100%",
            mt: 2,
          }}
        >
          <Box
            sx={{
              p: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {/* Search Bar */}
            <SearchInput placeholder="Search database by email, name or ID" />

            {/* Filter Dropdown */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, color: "#a3a3a3", letterSpacing: 1 }}
              >
                FILTER:
              </Typography>
              <TextField
                select
                value="ALL CUSTOMERS"
                variant="standard"
                slotProps={{
                  input: { disableUnderline: true },
                  select: {
                    MenuProps: { PaperProps: { sx: { bgcolor: "#f9f9f9" } } },
                  },
                }}
                sx={{
                  "& .MuiSelect-select": {
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#474747",
                    py: 0,
                  },
                }}
              >
                {filterOptions.map((option) => (
                  <MenuItem
                    key={option}
                    value={option}
                    sx={{
                      color: "#000",
                      "&.Mui-selected": {
                        backgroundColor: "#eaeaea",
                        color: "#000",
                      },
                      "&.Mui-selected:hover": {
                        backgroundColor: "#e0e0e0",
                      },
                    }}
                  >
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <FilterList sx={{ color: "#a3a3a3", fontSize: 18 }} />
            </Box>
          </Box>
          <Divider sx={{ opacity: 0.5 }} />
          <DataTable columns={desktopTable} data={tableData} />
        </AdminCard>
      )}
    </>
  );
}
