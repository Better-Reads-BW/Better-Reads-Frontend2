import React from "react";
import { Card, Grid } from "semantic-ui-react";
import styled from "styled-components";

const CardDiv = styled.div`

`;

export default function BookCard(props) {
  return (
    <CardDiv>
      <Grid.Column padded="horizontally" key={props.id}>
        <Card>
          <Card.Content>
            <Card.Header>{props.title}</Card.Header>
            <Card.Meta>by {props.author}</Card.Meta>
            <Card.Description>
              Description: {props.description}
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    </CardDiv>
  );
}
