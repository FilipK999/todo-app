import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

export default function Error() {
  return (
    <React.Fragment>
      <MuiAlert elevation={6} variant="filled" severity="error">
        Error message
      </MuiAlert>
    </React.Fragment>
  );
}
