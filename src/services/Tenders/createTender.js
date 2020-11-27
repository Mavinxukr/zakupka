import { Fetch } from '../../utils/fetcher';

export const createTenderRequest = async (params, cookies, body) => {
  const data = await Fetch.post('tenders', params, {
    body: JSON.stringify(body),
  }, cookies);
  return data;
};
