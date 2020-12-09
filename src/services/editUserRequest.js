import { Fetch } from '../utils/fetcher';

export const editUserRequest = async (params, cookies, body) => {
  const userUpdate = await Fetch.post('edit-user', params, {
    body: JSON.stringify(body),
  }, cookies);
  return userUpdate;
};
