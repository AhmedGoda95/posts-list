import { Box, OutlinedInput, TextField } from "@mui/material";
import { FC, memo, useState } from "react";

const SearchBox: FC<{ onSearch: (...arg: any[]) => any }> = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleOnKeyDown = (e: any) => {
    if (e.key === "Enter" || e.key === "NumpadEnter") {
      onSearch(value);
    }
  };

  return (
    <Box sx={{ marginBottom: 3 }}>
      <OutlinedInput
        placeholder="Search..."
        size="small"
        onKeyDown={handleOnKeyDown}
        onChange={(e) => setValue(e.target.value)}
        value={value}
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

export default memo(SearchBox);
