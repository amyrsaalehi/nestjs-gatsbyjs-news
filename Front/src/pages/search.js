import React, { useState, useEffect } from "react"
import { Grid, TextField, InputAdornment, Button } from "@material-ui/core"
import { Pageview } from "@material-ui/icons"
import axios from "axios"

import Layout from "../layouts/Layout"
import SearchResultCard from "../components/SearchResultCard"

function Search() {
  const [searchValue, setSearchValue] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('');

  const submitForm = e => {
    e.preventDefault()
    setIsLoading(true)
  }

  const fetchResults = async () => {
    if (isLoading) {
      if (searchValue) {
        await axios
          .get("http://localhost:3000/news", {
            params: {
              title: searchValue,
            },
          })
          .then(data => {
            data.data.articles.map(article => {
              if (article.urlToImage && article.author)
                setSearchResult(prevState => [...prevState, article])
            })
          }).catch(err => {
            setIsLoading(false)
            setError(err)
          })
      } else {
        await setSearchResult([])
      }
    }
    await setIsLoading(false)
  }

  useEffect(() => {
    fetchResults();
  }, [isLoading])

  return (
    <Layout title="Search">
      <Grid container justify="center">
        <Grid item xs={12} md={8} style={{ marginTop: "2rem" }}>
          <form
            onSubmit={submitForm}
            style={{ display: "flex", flexWrap: "nowrap" }}
          >
            <TextField
              style={{ width: "80%" }}
              label="Search"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Pageview />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="small"
              style={{ marginTop: 15, marginLeft: 10 }}
            >
              SEARCH
            </Button>
          </form>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {isLoading ? (
              <Grid item xs={12}>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "4rem",
                    marginRight: "1.5rem",
                  }}
                >
                  Loading
                </p>
              </Grid>
            ) : error ? (
              <Grid item xs={12}>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "4rem",
                    marginRight: "1.5rem",
                  }}
                >
                  {error}
                </p>
              </Grid>
            ): searchResult.length ? (
              searchResult.map(item => (
                <Grid item xs={12} md={6} key={item.url}>
                  <SearchResultCard
                    title={item.title}
                    description={item.description}
                    author={item.author}
                    date={item.publishedAt}
                    source={item.source.name}
                    link={item.url}
                    image={item.urlToImage}
                    content={item.content}
                    as="feed"
                  />
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "4rem",
                    marginRight: "1.5rem",
                  }}
                >
                  No Content There
                </p>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Search
