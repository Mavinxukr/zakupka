import { Fetch } from '../utils/fetcher';

export const updatePlanRequest = async (params, id, cookies, body) => {
  const data = await Fetch.patch(`plans/${id}`, params, {}, cookies, body);
  return data;
};
