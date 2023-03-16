import { Typography, Box } from "@mui/material";
import { FC } from "react";

const Comment: FC<CommentProps> = ({ body, name }) => {
  return (
    <>
      <Typography
        sx={{
          color: "#000",
          marginBottom: 1,
          fontSize: 18,
          fontWeight: 500,
          paddingInlineStart: 1,
        }}
        component="h2"
      >
        {name}
      </Typography>
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: 1,
          border: "2px solid #E1E1E1",
          color: "#00000080",
        }}
      >
        <Typography>{body}</Typography>
      </Box>
    </>
  );
};

interface CommentProps {
  name: string;
  body: string;
}

export default Comment;
