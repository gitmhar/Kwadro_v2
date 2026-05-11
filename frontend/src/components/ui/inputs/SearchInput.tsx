import { Search } from "@mui/icons-material";
import { InputAdornment, TextField, type TextFieldProps } from "@mui/material";

interface SearchInputProps extends Omit<TextFieldProps, "variant"> {
  placeholder?: string;
}

export default function SearchInput({
  placeholder = "Search...",
  sx,
  ...props
}: SearchInputProps) {
  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      variant="standard"
      slotProps={{
        input: {
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <Search sx={{ color: "#a3a3a3", fontSize: 20 }} />
            </InputAdornment>
          ),
        },
      }}
      sx={{
        bgcolor: "#f3f3f3",
        borderRadius: "12px",
        px: 2,
        py: 1,
        width: { xs: "100%", md: "400px" },
        "& .MuiInputBase-input": {
          fontSize: "0.85rem",
          color: "#6B7280",
        },
        ...sx,
      }}
      {...props}
    />
  );
}
