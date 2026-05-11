import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";

export default function GlobalFab() {
  return (
    <Fab
      color="primary"
      sx={{ position: "fixed", bottom: 24, right: 24, zIndex: 1300 }}
    >
      <Add />
    </Fab>
  );
}
