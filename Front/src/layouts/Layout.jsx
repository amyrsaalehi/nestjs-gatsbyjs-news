import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import { Container } from "@material-ui/core"
import layoutStyles from "./Layout.module.scss"
import Header from "../components/Header"

function Layout({ children, title }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <Helmet
        title={`${title} | ${data.site.siteMetadata.title}`}
        defer={false}
      />
      <Header />
      <Container maxWidth="md">{children}</Container>
    </Fragment>
  )
}

export default Layout
