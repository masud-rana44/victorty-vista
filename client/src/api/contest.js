import { axiosPublic, axiosSecure } from "./";

export const getAllContests = async (page, text) => {
  const { data } = await axiosPublic.get(`/contests?search=${text}`);
  return data;
};

export const saveContest = async (contest) => {
  const { data } = await axiosSecure.post("/contests", contest);
  return data;
};

export const getContestForAdmin = async (page) => {
  const limit = import.meta.env.VITE_APP_PAGE_SIZE || 5;
  const { data } = await axiosSecure.get(
    `/contests/admin?page=${page}&limit=${limit}`
  );
  return data;
};

// Update a contest in DB
export const updateContest = async (id, contest) => {
  const { data } = await axiosSecure.patch(`/contests/${id}`, contest);
  return data;
};

// Add a submission to a contest
export const addParticipant = async (contestId, userId) => {
  const { data } = await axiosSecure.patch(
    `/contests/${contestId}/participant/${userId}`,
    {}
  );
  return data;
};

// Declare a winner for a contest
export const declareWinner = async (contestId, winner) => {
  const { data } = await axiosSecure.patch(
    `/contests/${contestId}/winner`,
    winner
  );
  return data;
};

// Delete a contest in DB
export const deleteContest = async (id) => {
  const { data } = await axiosSecure.delete(`/contests/${id}`);
  return data;
};
