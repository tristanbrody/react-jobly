import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import CompanySearchForm from "./CompanySearchForm";

function Companies() {
  const [isLoaded, toggleLoaded] = useState(false);
  const [companies, setCompanies] = useState([]);
  async function getData(search = "") {
    console.log(`get data function is running now and search is ${search}`);
    await fetch(`http://localhost:3001/companies/${search}`).then(d =>
      d.json().then(res => {
        toggleLoaded(true);
        setCompanies(res.companies);
      })
    );
  }
  async function getData2(search = "search") {
    console.log(`get data function is running now and search is ${search}`);
    const url = `http://localhost:3001/companies/${search}`;
    if (url === `http://localhost:3001/companies/`) {
      return undefined;
    }
    await fetch(`http://localhost:3001/companies/${search}`).then(d =>
      d.json().then(res => {
        toggleLoaded(true);
        setCompanies([res]);
      })
    );
  }
  useEffect(() => {
    getData2();
  }, []);
  console.log(companies);
  return (
    <div>
      <CompanySearchForm getData2={getData2} />
      {isLoaded &&
      companies.map !== undefined &&
      companies[0] !== undefined &&
      companies[0].error === undefined ? (
        companies.map(c => {
          return (
            <CompanyCard
              title={c.company.name}
              numEmployees={c.company.numEmployees}
            />
          );
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default Companies;
