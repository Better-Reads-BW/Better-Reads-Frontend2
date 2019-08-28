import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [search, setSearch] = useState({ bookname: "" });
  const handleInputChange = event => {
    setSearch({ ...search, bookname: event.target.value });
  };
  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(search.bookname)}>
        <input
          onChange={handleInputChange}
          placeholder="bookname"
          value={search.bookname}
          bookname="bookname"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}