import React, { useState, useEffect } from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

import customCardStyles from "./CustomCard.module.scss"

export default function CustomCard({
  title,
  description,
  image,
  slug,
  setShouldRefresh,
}) {
  const [localStorageState, setLocalStorageState] = useState(
    localStorage.getItem("dont-show") || ""
  )
  const [shouldShow, setShouldShow] = useState(true)

  useEffect(() => {
    setShouldShow(!localStorageState.split(",").includes(title))
  }, [localStorageState])

  return (
    <>
      {shouldShow ? (
        <Card className={customCardStyles.rootCard}>
          <CardActionArea component={Link} to={slug}>
            <CardMedia
              title={title}
              image={image}
              component="img"
              alt={title}
              height="400"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ display: "flex", justifyContent: "flex-end", paddingRight: '2rem' }}>
            <Button
              size="small"
              color="primary"
              onClick={e => {
                localStorage.setItem(
                  "dont-show",
                  `${localStorageState},${title}`
                )
                setShouldRefresh(true)
              }}
            >
              Don't Show This Again
            </Button>
          </CardActions>
        </Card>
      ) : (
        <></>
      )}
    </>
  )
}
