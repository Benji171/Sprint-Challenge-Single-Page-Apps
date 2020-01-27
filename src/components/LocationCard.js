import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";

export default function LocationCard(props) {
  return (
    <Card>
      <CardTitle>{props.name}</CardTitle>
      <CardText>{props.type}</CardText>
      <CardText>{props.dimension}</CardText>
    </Card>
  );
}
