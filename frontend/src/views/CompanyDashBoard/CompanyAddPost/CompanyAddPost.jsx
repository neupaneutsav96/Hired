import { Grid } from "@mui/material";
import React from "react";
import Companylayout from "../../../components/Companylayout";
import CompanyNavbarIn from "../../../components/CompanyNavbarIn";

function CompanyAddPost() {
  return (
    <Grid container>
      <Companylayout>
        <Grid className="title">Post a job</Grid>
      </Companylayout>
    </Grid>
  );
}

export default CompanyAddPost;
