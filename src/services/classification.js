import { Fetch } from '../utils/fetcher';

export const getClassificationRequest = async (params) => {
  const data = await Fetch.get('classification', params, {});
  return data;
};
