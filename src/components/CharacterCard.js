import React from "react";
import { Container, CardTitle, CardText, CardImg } from "reactstrap";

export default function CharacterCard(props) {
  return (
    <Container className="card">
      <div card-header>
        <CardTitle className="title">{props.name}</CardTitle>
        <CardText>Status : {props.status}</CardText>
      </div>
        <CardImg src={props.image}></CardImg>
      <div card-body>
        <CardText>Species: {props.species} | Gender: {props.gender} | Location: {props.location}</CardText>
      </div>
        </Container>
  )
}
