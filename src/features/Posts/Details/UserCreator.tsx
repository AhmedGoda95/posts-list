import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { FC } from "react";

import ShowText from "./component/ShowText";
import { API_ENDPOINT } from "../../../config";
import { Link } from "react-router-dom";
import SpinnerLoader from "../../../shared/ui/SpinnerLoader";
import EmptyData from "../../../shared/ui/EmptyData";
import Error from "../../../shared/ui/Error";

const UserCreator: FC<UserCreatorProps> = ({ userId }) => {
  const [fetchedUser, setFetchedUser] = useState<Record<string, any> | null>(
    null
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const response = await fetch(`${API_ENDPOINT}users/${userId}`);
        const data = await response.json();
        setFetchedUser(data);
        setLoading(false);
      } catch (ex: any) {
        console.log(ex.message);
        setError(ex.message);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: 2,
        borderRadius: 1,
      }}
    >
      <SpinnerLoader loading={loading} sx={{ height: 150 }}>
        <Error error={error}>
          <EmptyData empty={fetchedUser === null}>
            <Typography
              component="h2"
              sx={{
                marginBottom: 2,
                textAlign: "center",
                fontWeight: 600,
                fontSize: 22,
              }}
            >
              User Creator
            </Typography>
            <ShowText title="Name" value={fetchedUser?.name} />
            <ShowText title="Phone" value={fetchedUser?.phone} />
            <ShowText title="Company" value={fetchedUser?.company.name} />

            <Typography
              sx={{
                marginTop: 2,
                fontSize: 16,
                "& a": {
                  color: "#24353F",
                },
              }}
            >
              <Link to={`/?userId=${userId}`}>Show All Posts</Link>
            </Typography>
          </EmptyData>
        </Error>
      </SpinnerLoader>
    </Box>
  );
};

interface UserCreatorProps {
  userId: string;
}

export default UserCreator;
