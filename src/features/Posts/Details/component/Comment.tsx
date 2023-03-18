import { Typography, Box, Avatar } from "@mui/material";
import { FC } from "react";

const Comment: FC<CommentProps> = ({ body, name }) => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Avatar sx={{ width: 40, height: 40, backgroundColor: "#24353F" }}>
          A
        </Avatar>
        <Typography
          sx={{
            color: "#000",
            fontSize: 16,
            fontWeight: 500,
            paddingInlineStart: 1,
          }}
          component="h2"
        >
          {name}
        </Typography>
      </Box>
      <Typography
        sx={{
          backgroundColor: "#fff",
          padding: 1,
          border: "2px solid #E1E1E1",
          color: "#00000080",
        }}
      >
        {body}
      </Typography>
    </>
  );
};

interface CommentProps {
  name: string;
  body: string;
}

export default Comment;
