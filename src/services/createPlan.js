import { Fetch } from '../utils/fetcher';

export const createPlan = async () => {
  const data = await Fetch.post('plans');
  return data;
};
