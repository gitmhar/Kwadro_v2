import { Box, Button, Stack, Typography } from "@mui/material";
import AdminCard from "../../../ui/cards/AdminCard";
import { LockOutline } from "@mui/icons-material";
import InputField from "../../../ui/inputs/InputField";

export default function ChangePassword() {
  const fields = [
    {
      name: "current_password",
      label: "CURRENT PASSWORD",
      placeholder: "•••••••",
      type: "password",
    },
    {
      name: "new_password",
      label: "NEW PASSWORD",
      placeholder: "New Password",
      type: "password",
    },
    {
      name: "repeat_password",
      label: "REPEAT PASSWORD",
      placeholder: "Repeat Password",
      type: "password",
    },
  ];
  return (
    <AdminCard
      sx={{
        bgcolor: "#f3f3f3",
        p: 4,
        borderRadius: "24px",
        width: "100%",
        height: "100%",
        maxWidth: 400,
      }}
    >
      <Stack spacing={3}>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 0.5, my: "auto" }}
        >
          <LockOutline sx={{ fontSize: 22, color: "#1a1c1c" }} />
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#1a1c1c", lineHeight: 1 }}
          >
            Security
          </Typography>
        </Box>
      </Stack>
      <Stack spacing={2.5} sx={{ mt: 3 }}>
        {fields.map((field) => (
          <InputField
            key={field.name}
            label={field.label}
            placeholder={field.placeholder}
            sx={{
              "& .MuiInputBase-root": {
                bgcolor: "#ffffff",
                borderRadius: "12px",
                px: 2,
                py: 1,
                fontSize: "1rem",
                fontWeight: 500,
                color: "#1a1c1c",
              },
            }}
          />
        ))}
      </Stack>
      <Button
        fullWidth
        variant="outlined"
        sx={{
          mt: 3,
          py: 1.5,
          borderRadius: "12px",
          color: "#000",
          borderColor: "#000",
          fontWeight: 700,
          textTransform: "none",
          fontSize: "1rem",
          borderWidth: "1.5px",
          "&:hover": {
            borderWidth: "1.5px",
            bgcolor: "rgba(0,0,0,0.04)",
            borderColor: "#000",
          },
        }}
      >
        Update Password
      </Button>
    </AdminCard>
  );
}
