import { Box } from "@mui/material";

interface TabToggleProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function TabToggle({ options, value, onChange }: TabToggleProps) {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      {options.map((option) => {
        const isActive = value === option;
        return (
          <Box
            key={option}
            component="button"
            onClick={() => onChange(option)}
            sx={{
              px: 1.5,
              py: 0.5,
              fontSize: "9px",
              fontFamily: "JetBrains Mono, monospace",
              fontWeight: 700,
              backgroundColor: isActive ? "#ffffff" : "transparent",
              color: isActive ? "#121414" : "#c4c7c8",
              border: isActive ? "none" : "1px solid #444748",
              cursor: "pointer",
              outline: "none",
              "&:hover": {
                borderColor: isActive ? "none" : "#ffffff",
                color: isActive ? "#121414" : "#ffffff",
              },
            }}
          >
            {option}
          </Box>
        );
      })}
    </Box>
  );
}