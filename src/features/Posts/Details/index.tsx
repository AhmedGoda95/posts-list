import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { API_ENDPOINT } from "../../../config";
import UserCreator from "./UserCreator";
import EmptyData from "../../../shared/ui/EmptyData";
import PostComments from "./PostComments";
import SpinnerLoader from "../../../shared/ui/SpinnerLoader";
import Error from "../../../shared/ui/Error";
import PostData from "./PostData";

const PostDetails = () => {
  const { postId } = useParams<{ postId: string }>();

  const [fetchedPost, setFetchedPost] = useState<Record<string, any> | null>(
    null
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const response = await fetch(`${API_ENDPOINT}posts/${postId}`);
        const data = await response.json();
        setFetchedPost(data);
        setLoading(false);
      } catch (ex: any) {
        console.log(ex.message);
        setError(ex.message);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <SpinnerLoader loading={loading}>
      <Error error={error}>
        <EmptyData empty={fetchedPost === null}>
          <Grid container columnSpacing={2} rowSpacing={3}>
            <Grid item xs={12} md={8}>
              <PostData title={fetchedPost?.title} body={fetchedPost?.body} />
            </Grid>
            <Grid item xs={12} md={4}>
              <UserCreator userId={fetchedPost?.userId} />
            </Grid>
            <Grid item xs={12}>
              <PostComments postId={postId!} />
            </Grid>
          </Grid>
        </EmptyData>
      </Error>
    </SpinnerLoader>
  );
};

export default PostDetails;
