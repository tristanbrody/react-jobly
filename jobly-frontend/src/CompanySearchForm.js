import React, { useState } from "react";
import Company from "./Company";

function CompanySearchForm({ getData }) {
  const [search, setSearch] = useState("");
  const handleChange = e => {
    setSearch(e.target.value);
    const res = getData(search);
    // .then(res => toggleLoaded(true));
  };
  return (
    <div>
      <form>
        <label htmlFor="company-search">Search for a company: </label>
        <input
          onKeyUp={handleChange}
          id="company-search"
          name="company-search"
          type="text"
        />
      </form>
    </div>
  );
}

export default CompanySearchForm;
