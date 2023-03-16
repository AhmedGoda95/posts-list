import { Grid } from "@mui/material";

import { CustomRouting } from "./routing";

function App() {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        paddingInline: {
          xs: 1,
          md: 0,
        },
        paddingBlock: 3,
      }}
    >
      <Grid item xs={12} md={10} lg={8} xl={6}>
        <CustomRouting />
      </Grid>
    </Grid>
  );
}

export default App;
