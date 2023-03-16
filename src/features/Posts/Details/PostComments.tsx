import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { FC } from "react";

import { API_ENDPOINT } from "../../../config";
import Comment from "./component/Comment";
import EmptyData from "../../../shared/ui/EmptyData";
import AddComment from "./component/AddComment";
import SpinnerLoader from "../../../shared/ui/SpinnerLoader";
import Error from "../../../shared/ui/Error";

const PostComments: FC<PostCommentsProps> = ({ postId }) => {
  const [fetchedComments, setFetchedComments] = useState<Record<string, any>[]>(
    []
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddComment = (comment: string) => {
    const addedCommentData = {
      postId,
      id: 100,
      name: "Ahmed Goda",
      email: "ahmed@mail.com",
      body: comment,
    };
    setFetchedComments((prevState) => [addedCommentData, ...prevState]);
  };

  console.log({ fetchedComments });

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const response = await fetch(`${API_ENDPOINT}posts/${postId}/comments`);
        const data = await response.json();
        setFetchedComments(data);
        setLoading(false);
      } catch (ex: any) {
        console.log(ex.message);
        setError(ex.message);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <Typography
        sx={{ marginBottom: 2, color: "#fff", fontSize: 24 }}
        component="h2"
      >
        Comments
      </Typography>
      <SpinnerLoader loading={loading}>
        <Error error={error}>
          <EmptyData empty={fetchedComments.length === 0}>
            <Box
              sx={{
                padding: 2,
                backgroundColor: "#f7f7f7",
                borderRadius: 1,
                maxHeight: "70vh",
                overflow: "auto",
              }}
            >
              {fetchedComments.map((comment: any) => {
                return (
                  <Box sx={{ marginBottom: 1.5 }} key={comment.id}>
                    <Comment name={comment.name} body={comment.body} />
                  </Box>
                );
              })}
            </Box>
            <AddComment onAddComment={handleAddComment} />
          </EmptyData>
        </Error>
      </SpinnerLoader>
    </>
  );
};

interface PostCommentsProps {
  postId: string;
}

export default PostComments;