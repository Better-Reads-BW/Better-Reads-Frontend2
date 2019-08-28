import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import { Grid, Container as SemanticContainer } from "semantic-ui-react";
import styled from "styled-components";

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/booktestdata.json?key=349ce8a0", {
        params: {}
      })
      .then(resp => {
        console.log(resp);
        const book = resp.data;
        setBooks(book);
      });
  }, []);

  return (
    <SemanticContainer>
      <Grid relaxed columns={3}>
        <Grid.Row padded="vertically" columns={3}>
          {books.map(newBook => {
            return (
              <BookCard
                key={newBook.id}
                id={newBook.id}
                title={newBook.Title}
                author={newBook.Author}
                description={newBook.Description}
              />
            );
          })}
        </Grid.Row>
      </Grid>
    </SemanticContainer>
  );
}