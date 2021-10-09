import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobCard from "./JobCard";

function Jobs() {
  const [loading, toggleLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const getJobs = async () => {
    const jobs = await JoblyApi.getJobs()
      .then(res => res)
      .then(res => {
        setJobs(res);
        setTimeout(() => toggleLoading(false), 1000);
      });
  };
  useEffect(() => getJobs(), []);
  console.log(jobs);
  return loading ? (
    <div>loading</div>
  ) : (
    <div>
      <h1>Jobs</h1>
      {jobs.jobs.map(j => {
        return <JobCard data={j} />;
      })}
    </div>
  );
}

export default Jobs;
