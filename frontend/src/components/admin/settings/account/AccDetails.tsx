import {
  Avatar,
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import AdminCard from "../../../ui/AdminCard";
import { CameraAlt } from "@mui/icons-material";
import InputField from "../../partials/InputField";

export default function AccountDetails() {
  const fields = [
    {
      name: "fullName",
      label: "FULL NAME",
      defaulValue: "Alexander Mitchell",
      type: "text",
    },
    {
      name: "email",
      label: "EMAIL",
      defaulValue: "alex.mitchell@dummy.com",
      type: "email",
    },
    {
      name: "prefName",
      label: "PREFFERED NAME",
      defaulValue: "Alex",
      type: "text",
    },
    {
      name: "contact",
      label: "PHONE NUMBER",
      defaulValue: "(+63) 9123456789",
      type: "text",
    },
  ];
  return (
    <AdminCard sx={{ height: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 4 }}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <IconButton
              sx={{
                bgcolor: "#000000",
                color: "#ffffff",
                p: 0.5,
                border: "2px solid #fff",
                "&:hover": {
                  bgcolor: "#333333",
                },
              }}
            >
              <CameraAlt sx={{ fontSize: "14px" }} />
            </IconButton>
          }
        >
          <Avatar
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander"
            sx={{ width: 80, height: 80, border: "1px solid #000" }}
          />
        </Badge>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, color: "#1a1c1c" }}>
            Account Details
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, color: "#474747", cursor: "pointer" }}
          >
            Upload Photo
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={3}>
        {fields.map((field) => (
          <Grid size={{ xs: 12, sm: 6 }}>
            <InputField
              key={field.name}
              label={field.label}
              defaultValue={field.defaulValue}
              type={field.type}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Button
          variant="outlined"
          sx={{
            bgcolor: "#000000",
            color: "#fff",
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "12px",
            px: 4,
            py: 1.5,
            "&:hover": { bgcolor: "#333" },
          }}
        >
          Save Changes
        </Button>
      </Box>
    </AdminCard>
  );
}
