import { Box, Button } from "@mui/material";
import { useState } from "react";
import BookingModal from "./BookingModal";

export default function TestModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleOpen}>Open Modal</Button>
      {/* Modal */}
      <Box>
        <BookingModal open={open} handleClose={handleClose} />
      </Box>
    </Box>
  );
}
