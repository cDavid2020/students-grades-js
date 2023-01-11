import got from "got";

const BASE_URL = "http://localhost:3001/grades";

export default {
  getGradesData() {
    return got(BASE_URL).json();
  },
};
