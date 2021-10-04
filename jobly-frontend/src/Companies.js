import React from "react";
import CompanyCard from "./CompanyCard";

function Companies() {
  async function getData() {
    const res = await fetch("http://localhost:3001/companies").then(d =>
      d.json()
    );
    return res;
  }
  let companies = getData();
  return (
    <div>
      {companies.map(c => {
        <CompanyCard title={c.title} />;
      })}
    </div>
  );
}

export default Companies;
