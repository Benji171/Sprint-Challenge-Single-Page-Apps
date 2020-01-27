import React, { useEffect, useState } from "react";
import axios from "axios"
import { Container, Row } from "reactstrap";
import EpisodeCard from "./EpisodeCard"

export default function LocationList() {
  // TODO: Add useState to track data from useEffect
  const [episode, setEpisode] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
    .get("https://rickandmortyapi.com/api/episode/")
    .then(res => {
      console.log(res)
      setEpisode(res.data.results);
    })
    .catch(err => {
      console.log("Fetch Error", err);
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  
  return (
    <Container>
      <Row>
        {episode.map(data => {
          return (
          <EpisodeCard
            name = {data.name}
            date = {data.air_date}
            episode = {data.episode}
          />
        )})}
      </Row>
    </Container>
  );
}