import React, { useEffect, useState } from "react";
import axios from "axios"
import { Container, Row } from "reactstrap";
import LocationCard from "./LocationCard";

export default function LocationList() {
  // TODO: Add useState to track data from useEffect
  const [location, setLocation] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
    .get("https://rickandmortyapi.com/api/location/")
    .then(res => {
      console.log(res)
      setLocation(res.data.results);
    })
    .catch(err => {
      console.log("Fetch Error", err);
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  
  return (
    <Container>
      <Row>
        {location.map(data => {
          return (
          <LocationCard
            name = {data.name}
            type = {data.type}
            dimension = {data.dimension}
          />
        )})}
      </Row>
    </Container>
  );
}

