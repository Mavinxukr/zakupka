import { Fetch } from '../utils/fetcher';

export const getPlanRequest = async (params, id) => {
  const dataPlan = await Fetch.get(`plans/${id}`, params, {});
  return dataPlan;
};
