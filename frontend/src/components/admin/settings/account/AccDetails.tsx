import {
  Avatar,
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import AdminCard from "../../../ui/cards/AdminCard";
import { CameraAlt } from "@mui/icons-material";
import InputField from "../../../ui/inputs/InputField";
import AvatarUpload from "../../../ui/shared/AvatarUpload";

const fields = [
  {
    name: "fullName",
    label: "FULL NAME",
    defaultValue: "Alexander Mitchell",
    type: "text",
  },
  {
    name: "email",
    label: "EMAIL",
    defaultValue: "alex.mitchell@dummy.com",
    type: "email",
  },
  {
    name: "prefName",
    label: "PREFFERED NAME",
    defaultValue: "Alex",
    type: "text",
  },
  {
    name: "contact",
    label: "PHONE NUMBER",
    defaultValue: "(+63) 9123456789",
    type: "text",
  },
];

export default function AccountDetails() {
  return (
    <AdminCard sx={{ height: "100%" }}>
      <Box sx={{ mb: 4 }}>
        <AvatarUpload
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander"
          title="Account Details"
        />
      </Box>
      <Grid container spacing={3}>
        {fields.map((field) => (
          <Grid key={field.name} size={{ xs: 12, sm: 6 }}>
            <InputField
              label={field.label}
              defaultValue={field.defaultValue}
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
            color: "#FFFFFF",
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "12px",
            px: 4,
            py: 1.5,
            "&:hover": { bgcolor: "#333333" },
          }}
        >
          Save Changes
        </Button>
      </Box>
    </AdminCard>
  );
}
