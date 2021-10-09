import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCard from "./JobCard";
function Job() {
  const params = useParams();
  const [loading, toggleLoading] = useState(true);
  const [job, setJob] = useState({});
  const getJob = async () => {
    await JoblyApi.getJob(params.job)
      .then(res => res)
      .then(res => {
        setJob(res.job);
        setTimeout(() => toggleLoading(false), 1000);
      });
  };
  useEffect(() => getJob(), []);

  return loading ? (
    <div>loading...</div>
  ) : (
    <div>
      <h5>{job.title}</h5>
      <ul>
        <li>Company: {job.companyHandle}</li>
        <li>Salary: {job.salary || "n/a"}</li>
        <li>Equity: {job.equity || "n/a"}</li>
      </ul>
    </div>
  );
}

export default Job;
