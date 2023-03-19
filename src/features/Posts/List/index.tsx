import { Box, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { BASE_URL } from "../../../config";
import EmptyData from "../../../shared/ui/EmptyData";
import Error from "../../../shared/ui/Error";
import SpinnerLoader from "../../../shared/ui/SpinnerLoader";
import PostItem from "./components/PostItem";
import SearchBox from "./SearchBox";

const LIMIT = 20;

const ListPosts = () => {
  const [fetchedPosts, setFetchedPosts] = useState<Record<string, any>[]>([]); // hold all posts (100 record)
  const [paginatedPosts, setPaginatedPosts] = useState<Record<string, any>[]>(
    []
  ); // hold paginated posts 20 by 20
  const [viewedPosts, setViewedPosts] = useState<Record<string, any>[]>([]); // hold viewed posts on the screen
  const [searchedValue, setSearchedValue] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const onLoadMore = () => {
    const loadedPosts = fetchedPosts.slice(
      viewedPosts.length,
      viewedPosts.length + LIMIT
    );
    setViewedPosts((prevPosts) => [...prevPosts, ...loadedPosts]);
    setPaginatedPosts((prevPosts) => [...prevPosts, ...loadedPosts]);
    const pageNumber = Math.ceil(
      (loadedPosts.length + viewedPosts.length) / 20
    );
    searchParams.set("page", `${pageNumber}`);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const userId = searchParams.get("userId");
    const pageNumber = searchParams.get("page") ?? 1;
    (async function () {
      setLoading(true);
      try {
        const url = userId ? `posts?userId=${userId}` : "posts";
        const response = await fetch(`${BASE_URL}${url}`);
        const data = await response.json();
        if (data.length) {
          setFetchedPosts(data);
          setViewedPosts(data.slice(0, LIMIT * +pageNumber));
          setPaginatedPosts(data.slice(0, LIMIT * +pageNumber));
          searchParams.set("limit", `${LIMIT}`);
          searchParams.set("page", `${pageNumber}`);
          setSearchParams(searchParams);
        }
        setLoading(false);
      } catch (ex: any) {
        console.log(ex.message);
        setError(ex.message);
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    const clonedPosts = structuredClone(paginatedPosts);
    if (searchedValue.trim()) {
      setViewedPosts(() =>
        clonedPosts.filter((post: any) =>
          post.title.includes(searchedValue.trim())
        )
      );
    } else {
      setViewedPosts(clonedPosts);
    }
  }, [searchedValue]);

  return (
    <SpinnerLoader loading={loading}>
      <Error error={error}>
        <SearchBox onSearch={setSearchedValue} />
        <EmptyData empty={viewedPosts.length === 0}>
          <Grid container columnSpacing={2} rowSpacing={2}>
            {viewedPosts.map((post: any) => {
              return (
                <Grid item xs={12} sm={6} lg={4} key={post.id}>
                  <PostItem item={post} />
                </Grid>
              );
            })}
          </Grid>

          <Box sx={{ marginTop: 5, textAlign: "center" }}>
            <Button
              onClick={onLoadMore}
              variant="contained"
              disabled={viewedPosts.length === fetchedPosts.length}
            >
              Load More
            </Button>
          </Box>
        </EmptyData>
      </Error>
    </SpinnerLoader>
  );
};

export default ListPosts;
