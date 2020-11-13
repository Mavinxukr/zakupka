import { Fetch } from '../utils/fetcher';

export const getTendersTypes = async (params) => {
  const tendersTypeData = await Fetch.get('type-tender', params, {});
  return tendersTypeData;
};
