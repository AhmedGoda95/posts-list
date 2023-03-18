import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "inherit",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#fff",
        height: "100vh",
      }}
    >
      <Typography component="h2" sx={{ fontSize: 64, lineHeight: 1 }}>
        404
      </Typography>
      <Typography
        component="h3"
        sx={{
          fontSize: 24,
          marginBottom: 3,
        }}
      >
        Page not found
      </Typography>
      <Button onClick={() => navigate("/")} variant="outlined">
        Back to Home
      </Button>
    </Box>
  );
};

export default NotFound;
