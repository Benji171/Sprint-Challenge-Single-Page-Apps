import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";

export default function EpisodeCard(props) {
  return (
    <Card>
      <CardTitle>{props.name}</CardTitle>
      <CardText>{props.episode}</CardText>
      <CardText>Release Date: {props.date}</CardText>
    </Card>
  );
}