import { Box, Typography } from "@mui/material";
import { FC } from "react";

const PostData: FC<PostDataProps> = ({ body, title }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: 2,
        borderRadius: 1,
        color: "#222",
      }}
    >
      <Typography
        component="h2"
        sx={{
          marginBottom: 2,
          fontWeight: 600,
          fontSize: 22,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: "#00000080",
        }}
      >
        {body}
      </Typography>
    </Box>
  );
};

interface PostDataProps {
  title: string;
  body: string;
}

export default PostData;
