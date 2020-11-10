import { Fetch } from '../utils/fetcher';

export const getClassifierCodeRequest = async (params) => {
  const data = await Fetch.get('classificationKEKV', params, {});
  return data;
};
