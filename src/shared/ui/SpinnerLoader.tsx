import { FC, ReactElement } from "react";
import Box from "@mui/material/Box";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import { SxProps } from "@mui/material/styles";

const SpinnerLoader: FC<SpinnerLoaderProps> = ({
  children,
  loading,
  sx = {},
  circularProgressProps = {},
}) => {
  if (loading)
    return (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...sx,
        }}
      >
        <CircularProgress
          size={30}
          thickness={5}
          {...circularProgressProps}
          sx={{ color: "#F7E98D" }}
        />
      </Box>
    );

  return <>{children}</>;
};

interface SpinnerLoaderProps {
  children?: ReactElement | ReactElement[] | null;
  loading: boolean;
  sx?: SxProps;
  circularProgressProps?: CircularProgressProps;
}

export default SpinnerLoader;
