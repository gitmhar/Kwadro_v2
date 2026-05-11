import { Avatar, Box, Typography } from "@mui/material";

interface UserIdentityProps {
  name: string;
  email?: string;
  avatarSize?: number;
  nameFontSize?: string;
  subtitle?: string;
}

export default function UserIdentity({
  name,
  email,
  avatarSize,
  nameFontSize,
  subtitle,
}: UserIdentityProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Avatar
        sx={{
          width: avatarSize,
          height: avatarSize,
          bgcolor: "#f0f0f0",
          color: "#474747",
          fontWeight: 700,
          fontSize: "0.75rem",
        }}
      >
        {initials}
      </Avatar>
      <Box>
        <Typography
          sx={{ fontWeight: 700, color: "#474747", fontSize: nameFontSize }}
        >
          {name}
        </Typography>
        {(email || subtitle) && (
          <Typography sx={{fontWeight: 600, fontSize: "0.75rem", color: "#a3a3a3" }}>
            {email || subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
