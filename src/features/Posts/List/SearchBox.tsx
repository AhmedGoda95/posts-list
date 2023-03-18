import { Box, TextField } from "@mui/material";

const SearchBox = () => {
  return (
    <Box sx={{ marginBottom: 3 }}>
      <TextField
        placeholder="Search..."
        size="small"
        variant="outlined"
        sx={{
          backgroundColor: "#fff",
          minWidth: {
            md: 350,
            xs: 300,
          },
        }}
      />
    </Box>
  );
};

export default SearchBox;
