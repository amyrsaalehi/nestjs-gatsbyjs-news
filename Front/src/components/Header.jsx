import { Link } from "gatsby"
import React from "react"
import { Grid } from "@material-ui/core"

import headerStyles from "./Header.module.scss"

function Header() {
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={headerStyles.rootContainer}
    >
      <Grid item>
        <h1 className={headerStyles.headerText}>News Feed</h1>
      </Grid>
      <Grid item>
        <nav>
          <ul className={headerStyles.menu}>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/search">
              <li>Search</li>
            </Link>
            <Link to="/favorates">
              <li>Favorates</li>
            </Link>
            <Link to="/subscribe">
              <li>Subscribe</li>
            </Link>
          </ul>
        </nav>
      </Grid>
    </Grid>
  )
}

export default Header
