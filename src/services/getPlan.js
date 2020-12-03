import { Fetch } from '../utils/fetcher';

export const getPlanRequest = async (params, id) => {
  const data = await Fetch.get(`plans/${id}`, params, {});
  return data;
};
