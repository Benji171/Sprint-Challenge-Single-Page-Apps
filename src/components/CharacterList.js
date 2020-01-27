import React, { useEffect, useState } from "react";
import axios from "axios"
import { Container, Row } from "reactstrap";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      console.log(res)
      setCharacter(res.data.results);
    })
    .catch(err => {
      console.log("Fetch Error", err);
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  
  return (
    <Container>
      <SearchForm/>
      <Row>
        {character.map(data => {
          return (
          <CharacterCard
          key = {data.name}
          name = {data.name}
          status = {data.status}
          image = {data.image}
          species = {data.species}
          gender = {data.gender}
          location = {data.location.name}
          />
        )})}
      </Row>
    </Container>
  );
}

