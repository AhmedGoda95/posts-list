import { Box, Typography } from "@mui/material";
import { FC } from "react";

const ShowText: FC<ShowTextProps> = ({ title, value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: 1,
      }}
    >
      <Typography sx={{ fontWeight: 600 }}>{title}:</Typography>
      <Typography
        sx={{
          color: "#00000080",
          marginInlineStart: 0.5,
          fontWeight: 500,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

interface ShowTextProps {
  title: string;
  value: string;
}

export default ShowText;
