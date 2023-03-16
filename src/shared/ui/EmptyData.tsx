import { FC, ReactElement } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const EmptyData: FC<EmptyDataProps> = ({ children, empty }) => {
  if (empty)
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 200,
        }}
      >
        <Typography
          sx={({ spacing }) => ({
            textAlign: "center",
            fontSize: {
              xs: spacing(2),
              md: spacing(2.5),
            },
          })}
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
}

export default EmptyData;