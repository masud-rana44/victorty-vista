import { axiosPublic, axiosSecure } from ".";

export const getAllContests = async () => {
  const { data } = await axiosPublic.get(`/contests`);
  return data;
};

export const getPopularContests = async () => {
  const { data } = await axiosPublic.get("/contests/popular");
  return data;
};

export const getContestById = async (id) => {
  const { data } = await axiosSecure.get(`/contests/${id}`);
  return data;
};

export const getContestByCreator = async (creatorId, page) => {
  const limit = import.meta.env.VITE_APP_PAGE_SIZE || 5;
  const { data } = await axiosSecure.get(
    `/contests/creator/${creatorId}?page=${page}&limit=${limit}`
  );
  return data;
};

export const getContestForAdmin = async (page) => {
  const limit = import.meta.env.VITE_APP_PAGE_SIZE || 5;
  const { data } = await axiosSecure.get(
    `/contests/admin?page=${page}&limit=${limit}`
  );
  return data;
};

export const getContestByIdForCreator = async (contestId, creatorId) => {
  const { data } = await axiosSecure.get(
    `/contests/${contestId}/creator/${creatorId}`
  );
  return data;
};

export const getRegisteredContests = async () => {
  const { data } = await axiosSecure.get("/contests/registered");
  return data;
};

export const getWinningContests = async () => {
  const { data } = await axiosSecure.get("/contests/winning");
  return data;
};

export const saveContest = async (contest) => {
  const { data } = await axiosSecure.post("/contests", contest);
  return data;
};

export const updateContest = async (id, contest) => {
  const { data } = await axiosSecure.patch(`/contests/${id}`, contest);
  return data;
};

export const addParticipant = async (contestId, userId) => {
  const { data } = await axiosSecure.patch(
    `/contests/${contestId}/participant/${userId}`,
    {}
  );
  return data;
};

export const declareWinner = async (contestId, winner) => {
  const { data } = await axiosSecure.patch(
    `/contests/${contestId}/winner`,
    winner
  );
  return data;
};

export const deleteContest = async (id) => {
  const { data } = await axiosSecure.delete(`/contests/${id}`);
  return data;
};

export const getWinners = async () => {
  const { data } = await axiosPublic.get("/contests/winners");
  return data;
};

export const getBestCreators = async () => {
  const { data } = await axiosPublic.get("/contests/best-creator");
  return data;
};

export const getUserStats = async () => {
  const { data } = await axiosSecure.get(`/contests/user-stats`);
  return data;
};

export const getLeaderBoard = async () => {
  const { data } = await axiosPublic.get("/contests/leaderboard");
  return data;
};
