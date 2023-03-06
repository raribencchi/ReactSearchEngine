import React, { useState } from "react";

export default function SearchEngine3() {
  let [city, setCity] = useState(" ");

  function handleSearch(event) {
    event.preventDefault();
    alert(city);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <form onSubmit={handleSearch}>
      <input type="Search" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
}
