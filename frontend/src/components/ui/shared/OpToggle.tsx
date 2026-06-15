import { styled, Switch } from "@mui/material";

// Sleek retro rectangular toggle switch to match .op-toggle / .op-slider
export const OpToggle = styled(Switch)(() => ({
  width: 44,
  height: 24,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 3,
    transitionDuration: "200ms",
    "&.Mui-checked": {
      transform: "translateX(20px)",
      "& + .MuiSwitch-track": {
        backgroundColor: "#ffffff",
        opacity: 1,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
    borderRadius: 0,
    backgroundColor: "#8e9192",
  },
  "& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb": {
    backgroundColor: "#000000",
  },
  "& .MuiSwitch-track": {
    borderRadius: 0,
    backgroundColor: "#2E2E2E",
    opacity: 1,
    border: "1px solid #444748",
    boxSizing: "border-box",
  },
}));