import React from "react";
import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  };

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="SearchHeader">
      <form onSubmit={handleFormSubmit}>
        <label>
          Bi şeyler Ara!
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
        <input value={valueInput} onChange= {handleChange} />
        <div>{valueInput}</div>
      </form>
    </div>
  );
}

export default SearchHeader;
