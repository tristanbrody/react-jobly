import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}${endpoint}`;
    const headers = {
      Authorization: `Bearer ${JoblyApi.token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const params = method === "get" ? data : {};

    try {
      console.log(`data is ${data}`);
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error: ", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // individual API routes

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async signup(data) {
    let res = await this.request(`/auth/register`, data, "post");
    return res.token;
  }

  static async login(data) {
    let res = await this.request(`/auth/token`, data, "post");
    return res.token;
  }

  static async getJobs(q = "") {
    return this.request(`/jobs${q}`);
  }

  static async getJob(job) {
    return this.request(`/jobs/${job}`);
  }
}
JoblyApi.token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
