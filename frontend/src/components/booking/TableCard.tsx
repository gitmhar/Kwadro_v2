import { Card, Box, Typography, Button, Chip } from "@mui/material";

export default function TableCard({ tableNumber }: { tableNumber: number }) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        bgcolor: "#191C1F",
        color: "white",
        p: 3,
        borderRadius: 8,
        position: "relative",
        borderLeft: "5px solid #2cf37d",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 40px rgba(44, 243, 125, 0.2)",
        },
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
        }}
      >
        <Box>
          <Typography
            variant="caption"
            sx={{ color: "#9c9c9c", fontWeight: "bold", letterSpacing: 1 }}
          >
            STANDARD 9FT
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            Table {tableNumber < 10 ? `0${tableNumber}` : tableNumber}
          </Typography>
        </Box>
        <Chip
          label="AVAILABLE"
          size="small"
          sx={{
            bgcolor: "rgba(44, 243, 125, 0.1)",
            color: "#2cf37d",
            fontWeight: "bold",
            borderRadius: 2,
            fontSize: "0.7rem",
          }}
        />
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          bgcolor: "black",
          borderRadius: 6,
          p: 2,
          mb: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 180,
        }}
      >
        <Box
          component="img"
          src="/pool-table.png"
          sx={{ width: "100%", borderRadius: 2 }}
        />
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="caption" sx={{ color: "#9c9c9c" }}>
            Hourly Rate
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            $3.00
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#2cf37d",
            color: "#000",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: 4,
            textTransform: "none",
            "&:hover": { bgcolor: "#24cc68" },
          }}
        >
          Book Now
        </Button>
      </Box>
    </Card>
  );
}
