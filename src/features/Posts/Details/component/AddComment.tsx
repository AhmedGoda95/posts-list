import { Box, Button, TextField } from "@mui/material";
import { FC, useState } from "react";

const AddComment: FC<{ onAddComment: (...arg: any[]) => any }> = ({
  onAddComment,
}) => {
  const [enteredComment, setEnteredComment] = useState("");

  const handleOnClick = () => {
    if (enteredComment.trim()) {
      onAddComment(enteredComment);
      setEnteredComment("");
    }
  };

  const handleOnKeyDown = (e: any) => {
    if (
      enteredComment.trim() &&
      (e.key === "Enter" || e.key === "NumpadEnter")
    ) {
      onAddComment(enteredComment);
      setEnteredComment("");
    }
  };

  return (
    <Box
      sx={{
        marginTop: 2,
        backgroundColor: "#fff",
        padding: 2,
        borderRadius: 2,
      }}
    >
      <TextField
        variant="outlined"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            paddingRight: 0,
          },
          marginBottom: 1,
        }}
        onChange={(e) => setEnteredComment(e.target.value)}
        value={enteredComment}
        onKeyDown={handleOnKeyDown}
        placeholder="Writea Comment..."
        multiline
        maxRows={4}
      />
      <Box sx={{ textAlign: "right", marginRight: 2 }}>
        <Button onClick={handleOnClick} disabled={!enteredComment.trim()}>
          Post Comment
        </Button>
      </Box>
    </Box>
  );
};

export default AddComment;
