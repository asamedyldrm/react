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
        <i className="fa-solid fa-magnifying-glass"></i><h4 className="">Bi şeyler Ara!</h4>
        </label>
        <input className="input" value={valueInput} onChange= {handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
