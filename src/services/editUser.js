import { Fetch } from '../utils/fetcher';

export const editUser = async (params, body, cookies) => {
  const userData = await Fetch.get('edit-user', params, {
    body: JSON.stringify(body),
  }, cookies);
  return userData;
};
