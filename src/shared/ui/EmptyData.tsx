import { FC, ReactElement } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const EmptyData: FC<EmptyDataProps> = ({ children, empty, color = "#fff" }) => {
  if (empty)
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 100,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color,
            fontSize: {
              xs: 16,
              md: 22,
            },
          }}
        >
          No Data Found
        </Typography>
      </Box>
    );

  return <>{children}</>;
};

interface EmptyDataProps {
  children: ReactElement | ReactElement[];
  empty: boolean;
  color?: string;
}

export default EmptyData;
