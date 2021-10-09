import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import CompanySearchForm from "./CompanySearchForm";

function Companies() {
  const [isLoaded, toggleLoaded] = useState(false);
  const [companies, setCompanies] = useState([]);
  async function getData(search = "") {
    const url = `http://localhost:3001/companies?name=${search}`;
    if (url === `http://localhost:3001/companies?name=/`) {
      toggleLoaded(true);
      return undefined;
    } else {
      await fetch(`http://localhost:3001/companies?name=${search}`).then(d =>
        d.json().then(res => {
          toggleLoaded(true);
          setCompanies([res]);
        })
      );
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <CompanySearchForm getData={getData} />
      {isLoaded &&
      companies[0] !== undefined &&
      companies[0].error === undefined ? (
        companies[0].companies.map(c => {
          return <CompanyCard title={c.name} numEmployees={c.numEmployees} />;
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default Companies;
