import { Fetch } from '../utils/fetcher';

export const userCompanyPost = async (params, cookies, body) => {
  const postData = await Fetch.post('edit-user-company', params, {
    body: JSON.stringify(body),
  }, cookies);
  return postData;
};
