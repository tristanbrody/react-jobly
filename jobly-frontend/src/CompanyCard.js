import React from "react";
import JoblyApi from "./api";

function CompanyCard({ title, numEmployees = null }) {
  return (
    <card>
      <h5>{title}</h5>
      <p>Employees: {numEmployees}</p>
    </card>
  );
}

export default CompanyCard;
