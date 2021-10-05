import React from "react";

function CompanyCard({ title, numEmployees }) {
  console.log(numEmployees);
  return (
    <card>
      <h5>{title}</h5>
      <p>Employees: {numEmployees}</p>
    </card>
  );
}

export default CompanyCard;
