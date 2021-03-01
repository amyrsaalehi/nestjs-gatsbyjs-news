import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { StarBorder, Star } from "@material-ui/icons";

import searchResultCardStyles from "./SearchResultCard.module.scss";
import axios from "axios";

function SearchResultCard({
  id,
  setIsLoading,
  title,
  description,
  author,
  date,
  source,
  link,
  image,
  content,
  as,
}) {
  const [isFavorate, setIsFavorate] = useState(false);

  const handleAddToFavorates = (e) => {
    axios
      .post(
        "http://localhost:3000/news/favorate",
        {
          title,
          link,
          description,
          content,
          source,
          author,
          image,
          date,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => {
        setIsFavorate(true);
      });
  };

  const handleRemoveFromFavorates = (e) => {
    axios.delete(`http://localhost:3000/news/favorate/${id}`).then((data) => {
      setIsLoading(true);
    });
  };

  useEffect(() => {
    if (as === "favorate") {
      setIsFavorate(true);
    } else {
      setIsFavorate(false);
    }
  }, [as]);

  return (
    <Card className={searchResultCardStyles.rootCard}>
      <CardActionArea>
        <CardMedia
          title={title}
          image={image}
          component="img"
          alt={title}
          height="250"
        />
        <CardContent>
          <Grid container>
            <Grid item xs={12} className={searchResultCardStyles.mtContainer}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12} className={searchResultCardStyles.mtContainer}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    component="p"
                    align="justify"
                  >
                    {author.split(",")[0]}
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    component="p"
                    align="right"
                    display="block"
                    className={searchResultCardStyles.mrTypography}
                  >
                    {source}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className={searchResultCardStyles.mtContainer}>
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="caption"
                color="secondary"
                component="p"
                align="right"
                display="block"
                className={searchResultCardStyles.mrTypography}
              >
                {date.replace("T", " ").slice(0, 16)}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justify="space-between">
          <Button className={searchResultCardStyles.plButton} size="small" color="primary">
            <a target="_blank" href={link}>
              Read More
            </a>
          </Button>
          <Button
            onClick={
              !isFavorate ? handleAddToFavorates : handleRemoveFromFavorates
            }
          >
            {!isFavorate ? <StarBorder /> : <Star />}
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default SearchResultCard;
