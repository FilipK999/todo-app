import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

export default function Error({ message }) {
  return (
    <MuiAlert elevation={1} variant="filled" severity="error" style={{ width: "100%" }}>
      {message}
    </MuiAlert>
  );
}
