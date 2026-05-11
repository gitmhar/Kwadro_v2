import { Card, Box, Typography, Button, Chip } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BaseCard from "../ui/cards/BaseCard";

interface TableCardProps {
  tableNumber: number;
  onBookClick: (tableNumber: number) => void;
  isOccupied: boolean;
  remainingTime?: string;
}

export default function TableCard({
  tableNumber,
  onBookClick,
  isOccupied,
  remainingTime,
}: TableCardProps) {
  return (
    <BaseCard
      sx={{
        borderLeft: isOccupied ? "5px solid #ff4d4d" : "5px solid #2cf37d",
        opacity: isOccupied ? 0.9 : 1,
        "&:hover": {
          transform: { xs: "none", sm: "translateY(-8px)" },
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
            sx={{
              color: "#9c9c9c",
              fontWeight: "bold",
              letterSpacing: 1,
              fontSize: { xs: "0.6rem", sm: "0.7rem" },
            }}
          >
            STANDARD 9FT
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
            }}
          >
            Table {tableNumber < 10 ? `0${tableNumber}` : tableNumber}
          </Typography>
        </Box>
        <Chip
          label={isOccupied ? "OCCUPIED" : "AVAILABLE"}
          size="small"
          sx={{
            bgcolor: isOccupied
              ? "rgba(255, 77, 77, 0.1)"
              : "rgba(44, 243, 125, 0.1)",
            color: isOccupied ? "#ff4d4d" : "#2cf37d",
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
          p: { xs: 1.5, sm: 2 },
          mb: { xs: 2, sm: 3 },
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: { xs: 120, sm: 150, md: 180 },
        }}
      >
        <Box
          component="img"
          src="/pool-table.png"
          sx={{
            width: "100%",
            borderRadius: 2,
            opacity: isOccupied ? 0.4 : 1,
            filter: isOccupied ? "grayscale(40%)" : "none",
          }}
        />

        {isOccupied && remainingTime && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "rgba(0,0,0,0.85)", // Darker for better contrast
              px: 1,
              py: 1,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              gap: 1,
              border: "1px solid rgba(255, 77, 77, 0.3)",
            }}
          >
            <AccessTimeIcon
              sx={{
                color: "#ff4d4d",
                fontSize: { xs: "0.9rem", sm: "1.1rem" },
              }}
            />
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "0.6rem", sm: "0.7rem" },
                fontWeight: "bold",
              }}
            >
              {remainingTime}
            </Typography>
          </Box>
        )}
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
          onClick={() => onBookClick(tableNumber)}
          sx={{
            fontWeight: "bold",
            px: { xs: 2, sm: 2.5, md: 3 },
            py: { xs: 0.8, sm: 1.1, md: 1.4 },
            borderRadius: 2,
            textTransform: "none",
            fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.95rem" },
            bgcolor: isOccupied ? "transparent" : "#2cf37d",
            color: isOccupied ? "white" : "black",
            border: isOccupied ? "1px solid #444" : "none",
            "&:hover": { bgcolor: isOccupied ? "#333" : "#24cc68" },
          }}
        >
          {isOccupied ? "View Schedule" : "Book Now"}
        </Button>
      </Box>
    </BaseCard>
  );
}
