import { FC, ReactElement } from "react";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/material/styles";
import { Alert } from "@mui/material";

const Error: FC<ErrorProps> = ({ children, error, sx = {} }) => {
  if (error)
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...sx,
        }}
      >
        <Alert severity="error">{error}</Alert>
      </Box>
    );

  return <>{children}</>;
};

interface ErrorProps {
  children: ReactElement | ReactElement[] | null | undefined | unknown;
  error: string | null;
  sx?: SxProps;
}

export default Error;
