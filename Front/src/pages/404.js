import React from "react";
import { Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";
import notFoundPageStyles from './404.module.scss';

const NotFoundPage = () => (
  <>
    <Helmet title="404 | Not Found" />
    <Grid
      container
      justify="center"
      alignItems="center"
      className={notFoundPageStyles.root}
    >
      <h1>
        We Are Writing Some Content For This Page. Please Be Patient Till It
        Ends!
      </h1>
      <img
        src="/images/404.jpg"
        alt="404 | Not Found"
        className={notFoundPageStyles.image}
      />
    </Grid>
  </>
);

export default NotFoundPage;
