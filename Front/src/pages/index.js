import React, { useState, useEffect } from "react"

import Layout from "../layouts/Layout"
import { Grid } from "@material-ui/core"

import CustomCard from "../components/CustomCard"

const mockData = [
  {
    slug: "/search",
    title: "Search",
    description:
      "search about everything and get updated about it and tap on read more to be able to explore more!",
    image: "/images/news-1.png",
  },
  {
    slug: "/favorates",
    title: "Favorates",
    description:
      "Save the news that you want to show others later... Add it to your favorates list because this news is not a fresh news tomorrow!",
    image: "/images/news-2.png",
  },
  {
    slug: "/subscribe",
    title: "subscribe",
    description: "Be part of us! Subscribe now to get News News!!!",
    image: "/images/news-3.jpeg",
  },
]

const IndexPage = () => {
  const [cards, setCards] = useState([])
  const [shouldRefresh, setShouldRefresh] = useState(true)

  useEffect(() => {
    if (shouldRefresh) {
      setCards([])
      setTimeout(() => {
        setCards(mockData)
      }, 100)
    }
    setShouldRefresh(false)
  }, [shouldRefresh])

  return (
    <Layout title="Home">
      <Grid container>
        {cards &&
          cards.map(card => (
            <Grid item xs={12}>
              <CustomCard
                title={card.title}
                description={card.description}
                slug={card.slug}
                image={card.image}
                setShouldRefresh={setShouldRefresh}
              />
            </Grid>
          ))}
      </Grid>
    </Layout>
  )
}

export default IndexPage
