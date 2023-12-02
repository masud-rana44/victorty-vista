import { axiosSecure } from "./";
// Save a contest in DB
export const saveContest = async (contest) => {
  const { data } = await axiosSecure.post("/contests", contest);
  return data;
};
