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
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <CompanySearchForm getData={getData} />
      {isLoaded ? (
        companies.map(c => {
          return <CompanyCard title={c.name} numEmployees={c.numEmployees} />;
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default Companies;
