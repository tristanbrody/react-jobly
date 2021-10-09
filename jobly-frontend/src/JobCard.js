import React from "react";

function JobCard(job) {
  return (
    <div>
      <h5>{job.data.title}</h5>
      <ul>
        <li>Company: {job.data.companyHandle}</li>
        <li>Salary: {job.data.salary || "n/a"}</li>
        <li>Equity: {job.data.equity || "n/a"}</li>
      </ul>
    </div>
  );
}

export default JobCard;
