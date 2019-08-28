import React from "react";
export default function BookCard({ char }) {
  return (
    <Card>
      <Image src={char.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{char.name}</Card.Header>
        <Card.Meta>{char.description}</Card.Meta>
        <Card.Description>{char.isbm.number}</Card.Description>
      </Card.Content>
      <Card.Content extra></Card.Content>
    </Card>
  );
}
