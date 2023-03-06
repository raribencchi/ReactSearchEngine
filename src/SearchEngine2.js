import React from "react";

export default function SearchEngine2() {
  function handleSearch(event) {
    event.preventDefault();
    alert("Searching");
  }

  return (
    <form onSubmit={handleSearch}>
      <input type="Search" />
      <input type="submit" value="Search" />
    </form>
  );
}
