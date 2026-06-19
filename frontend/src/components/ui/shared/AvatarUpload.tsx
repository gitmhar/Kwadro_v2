import { CameraAlt } from "@mui/icons-material";
import { Avatar, Badge, Box, IconButton, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface AvatarUploadProps {
  src?: string;
  size?: number;
  title?: ReactNode;
  uploadLabel?: string;
  onUpload?: () => void;
}

export default function AvatarUpload({
  src,
  size = 80,
  title,
  uploadLabel = "Upload Photo",
  onUpload,
}: AvatarUploadProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <IconButton
            onClick={onUpload}
            sx={{
              bgcolor: "#000000",
              color: "#FFFFFF",
              p: 0.5,
              border: "2px solid #FFFFFF",
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
          src={src}
          sx={{ width: size, height: size, border: "1px solid #000000" }}
        />
      </Badge>
      {title && (
        <Box>
          {typeof title === "string" ? (
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#1A1C1C" }}>
              {title}
            </Typography>
          ) : (
            title
          )}
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, color: "#474747", cursor: "pointer" }}
            onClick={onUpload}
          >
            {uploadLabel}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
