import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PostItem: FC<PostItemProps> = ({ item }) => {
  const { id, title, body, userId } = item;
  return (
    <Link to={`posts/${id}`}>
      <Box
        sx={{
          backgroundImage: "linear-gradient(#F9EFAF, #F7E98D)",
          padding: 2,
          borderRadius: 1,
          color: "#222",
        }}
      >
        <Typography
          component="h3"
          sx={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: "1",
            WebkitBoxOrient: "vertical",
            marginBottom: 1.5,
            fontWeight: 600,
            fontSize: 22,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            height: 75,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
          }}
        >
          {body}
        </Typography>
      </Box>
    </Link>
  );
};

interface PostItemProps {
  item: { id: number; title: string; body: string; userId: number };
}

export default PostItem;
