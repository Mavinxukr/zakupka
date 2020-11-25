import { Fetch } from '../../utils/fetcher';

export const createPlaneRequest = async (params, cookies, body) => {
  const data = await Fetch.post('plans', params, {
    body: JSON.stringify(body),
  }, cookies);
  return data;
};
