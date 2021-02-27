import { Link } from "gatsby"
import React from "react"
import { Grid  } from '@material-ui/core'
import Layout from "../layouts/Layout"
import { Helmet } from "react-helmet"


const NotFoundPage = () => (
  <>
    <Helmet title="404 | Not Found" />
    <Grid container justify="center" alignItems="center" style={{height: '90vh', objectFit: 'cover', position: 'relative'}}>
      <h1>We Are Writing Some Content For This Page. Please Be Patient Till It Ends!</h1>
      <img src="/images/404.jpg" alt="404 | Not Found" style={{ width: '100%', height: '100%'}} />
    </Grid>
  </>
)

export default NotFoundPage
