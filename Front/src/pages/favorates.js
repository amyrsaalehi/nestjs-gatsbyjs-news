import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";

import Layout from "../layouts/Layout";
import SearchResultCard from "../components/SearchResultCard";

import favoratesStyles from "./favorates.module.scss";

function Favorates() {
  const [favorateNews, setFavorateNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    if (isLoading) {
      await axios
        .get("http://localhost:3000/news/favorate")
        .then((data) => {
          setFavorateNews(data.data);
        })
        .catch((err) => {
          setIsLoading(false);
        });
    }
    await setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [isLoading]);

  return (
    <Layout title="Favorates">
      <Grid container>
        {isLoading ? (
          <Grid item xs={12}>
            <p className={favoratesStyles.paragraph}>Loading</p>
          </Grid>
        ) : favorateNews?.length !== 0 ? (
          favorateNews.map((item) => (
            <Grid item xs={12} md={6} key={item._id}>
              <SearchResultCard
                id={item._id}
                title={item.title}
                description={item.description}
                author={item.author}
                date={item.date}
                source={item.source}
                link={item.link}
                image={item.image}
                content={item.content}
                setIsLoading={setIsLoading}
                as="favorate"
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <p className={favoratesStyles.paragraph}>No Favorates</p>
          </Grid>
        )}
      </Grid>
    </Layout>
  );
}

export default Favorates;
