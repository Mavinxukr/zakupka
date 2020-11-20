import { Fetch } from '../../utils/fetcher';

export const getIdentifierRequest = async (params, cookies) => {
  const data = await Fetch.get('identifier', params, {}, cookies);
  return data;
};
