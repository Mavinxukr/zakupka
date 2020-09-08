import { Fetch } from '../utils/fetcher';

export const getTendersRequest = async (params) => {
  const serverData = await Fetch.get('tenders', params, {});
  return serverData;
};
