import { Fetch } from '../utils/fetcher';

export const getPlansRequest = async (params) => {
  const data = await Fetch.get('plans', params, {});
  return data;
};
