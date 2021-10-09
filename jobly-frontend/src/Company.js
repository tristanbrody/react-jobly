import React, { useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";

function Company() {
  const { title } = useParams();
  const [loading, toggleLoading] = useState(true);
  const getCompany = async () => {
    toggleLoading(true);
    return JoblyApi.getCompany(title);
  };
  const company = getCompany();
  return loading ? (
    <div>loading</div>
  ) : (
    <div>
      <CompanyCard title={company.title} numEmployees={company.numEmployees} />
    </div>
  );
}

export default Company;
