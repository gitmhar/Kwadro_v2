import { FormControl, MenuItem, Select } from "@mui/material";

interface StyledSelectProps {
  value: string;
  options?: string[];
  onChange?: (value: string) => void;
  fullWidth?: boolean;
}

export default function StyledSelect({
  value,
  options,
  onChange,
  fullWidth = true,
}: StyledSelectProps) {
  return (
    <FormControl fullWidth={fullWidth}>
      <Select
        value={value}
        variant="standard"
        disableUnderline
        onChange={(e) => onChange?.(e.target.value)}
        MenuProps={{
          slotProps: {
            paper: { sx: { bgcolor: "#fff" } },
          },
        }}
        sx={{
          bgcolor: "#F5F5F5",
          color: "#000000",
          borderRadius: "12px",
          px: 2,
          py: 0.5,
          fontWeight: 500,
          "& .MuiSelect-select": { py: 1.5 },
        }}
      >
        {options?.map((option) => (
          <MenuItem
            key={option}
            value={option}
            sx={{
              color: "#000",
              "&.Mui-selected": {
                backgroundColor: "#EAEAEA",
                color: "#000",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "#E0E0E0",
              },
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
