import { Box, TextField, Typography, type TextFieldProps } from "@mui/material";

type InputFieldProps = TextFieldProps & {
  label?: string;
};

export default function InputField({
  label,
  sx,
  slotProps,
  ...props
}: InputFieldProps) {
  return (
    <Box>
      {label && (
        <Typography
          variant="caption"
          sx={{
            color: "#a3a3a3",
            fontWeight: 600,
            fontSize: "0.8rem",
            textTransform: "uppercase",
            mb: 1,
            display: "block",
          }}
        >
          {label}
        </Typography>
      )}

      <TextField
        variant="standard"
        slotProps={{
          input: { disableUnderline: true, ...slotProps },
        }}
        sx={{
          "& .MuiInputBase-root": {
            bgcolor: "#f5f5f5",
            borderRadius: "12px",
            px: 2,
            py: 1,
            fontSize: "1rem",
            fontWeight: 500,
            color: "#1a1c1c",
          },
          ...sx,
        }}
        {...props}
      />
    </Box>
  );
}
