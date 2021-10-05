import React from "react";

function CompanyCard({ title, numEmployees }) {
  return (
    <card>
      <h5>{title}</h5>
      <p>Employees: {numEmployees}</p>
    </card>
  );
}

export default CompanyCard;
