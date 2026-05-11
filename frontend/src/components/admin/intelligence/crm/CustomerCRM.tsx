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

function createData(
  name: string,
  email: string,
  value: string,
  visits: string,
  lastActive: string,
  status: string,
) {
  return { name, email, value, visits, lastActive, status };
}

export default function CustomerCRM() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const tableData = [
    createData(
      "Client 1",
      "client#1@billiard.com",
      "$660.00",
      "3 visits",
      "1 hour ago",
      "Occasional",
    ),
    createData(
      "Client 2",
      "client#2@billiard.com",
      "$11660.00",
      "3 visits",
      "1 hour ago",
      "Regular",
    ),
    createData(
      "Client 3",
      "client#3@billiard.com",
      "$61650.00",
      "3 visits",
      "1 hour ago",
      "Top Tier",
    ),
    createData(
      "Client 4",
      "client#4@billiard.com",
      "$62630.00",
      "3 visits",
      "1 hour ago",
      "Top Tier",
    ),
    createData(
      "Client 5",
      "client#5@billiard.com",
      "$3.00",
      "3 visits",
      "1 hour ago",
      "Newbie",
    ),
  ];

  return (
    <>
      <SectionHeader
        title="Customer CRM"
        subtitle="Intelligence"
        primaryBtnLabel="Export CSV"
        secondaryBtnLabel="Send Email Blast"
        primaryBtnIcon=""
        secondaryBtnIcon={<Campaign />}
        hideOnButtonMobile={true}
      />
      {isMobile ? (
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Box>
            {/* Search Bar */}
            <SearchInput placeholder="Search database by email, name or ID" />
          </Box>
          {tableData.map((row) => (
            <AdminCard key={row.name} sx={{ p: 3, borderRadius: "24px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  mb: 3,
                }}
              >
                <UserIdentity name={row.name} email={row.email} />
              </Box>
              <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid size={{ xs: 6 }}>
                  <Typography
                    variant="caption"
                    sx={{ color: "#a3a3a3", fontWeight: 600, letterSpacing: 1 }}
                  >
                    LIFETIME VALUE
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 500, fontSize: "1rem", mt: 0.5 }}
                  >
                    {row.value}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Typography
                    variant="caption"
                    sx={{ color: "#a3a3a3", fontWeight: 600, letterSpacing: 1 }}
                  >
                    ACTIVITY
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 500, fontSize: "1rem", mt: 0.5 }}
                  >
                    {row.visits}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Typography
                    variant="caption"
                    sx={{ color: "#a3a3a3", fontWeight: 600, letterSpacing: 1 }}
                  >
                    STATUS
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: "#000",
                      color: "#fff",
                      px: 1,
                      py: 0.2,
                      borderRadius: "8px",
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      mt: 0.5,
                      width: "fit-content",
                    }}
                  >
                    {row.status.toUpperCase()}
                  </Box>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Typography
                    variant="caption"
                    sx={{ color: "#a3a3a3", fontWeight: 600, letterSpacing: 1 }}
                  >
                    LAST ACTIVE
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 500, fontSize: "1rem", mt: 0.5 }}
                  >
                    {row.lastActive}
                  </Typography>
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                startIcon={<Campaign />}
                sx={{
                  display: { sm: "none" },
                  bgcolor: "#000000",
                  color: "#ffffff",
                  py: 2,
                  borderRadius: "16px",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  letterSpacing: 1,
                  "&:hover": { bgcolor: "#333333" },
                }}
              >
                Send Email Blast
              </Button>
            </AdminCard>
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
                <MenuItem
                  value="ALL CUSTOMERS"
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
                  ALL CUSTOMERS
                </MenuItem>
                <MenuItem
                  value="TOP TIER"
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
                  TOP TIER
                </MenuItem>
              </TextField>
              <FilterList sx={{ color: "#a3a3a3", fontSize: 18 }} />
            </Box>
          </Box>
          <Divider sx={{ opacity: 0.5 }} />
          <DataTable
            columns={[
              {
                field: "name",
                headerName: "IDENTITY",
                render: (row) => (
                  <UserIdentity name={row.name} email={row.email} />
                ),
              },
              {
                field: "value",
                headerName: "LIFETIME VALUE",
                render: (row) => (
                  <Typography sx={{ fontWeight: 700, color: "#474747" }}>
                    {row.value}
                  </Typography>
                ),
              },
              {
                field: "visits",
                headerName: "VISITS",
                render: (row) => (
                  <Typography sx={{ color: "#474747" }}>
                    {row.visits}
                  </Typography>
                ),
              },
              {
                field: "lastActive",
                headerName: "LAST ACTIVE",
                render: (row) => (
                  <Typography sx={{ color: "#474747" }}>
                    {row.lastActive}
                  </Typography>
                ),
              },
              {
                field: "status",
                headerName: "STATUS",
                render: (row) => (
                  <Box
                    sx={{
                      display: "inline-block",
                      bgcolor: "#f0f0f0",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "20px",
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      color: "#474747",
                      textTransform: "uppercase",
                    }}
                  >
                    {row.status}
                  </Box>
                ),
              },
            ]}
            data={tableData}
          />
        </AdminCard>
      )}
    </>
  );
}
