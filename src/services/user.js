import { Fetch } from '../utils/fetcher';

export const login = async (params, body) => {
  const serverData = await Fetch.post('login', params, {
    body: JSON.stringify(body),
  });
  return serverData;
};

export const registration = async (params, body) => {
  const serverData = await Fetch.post('register', params, {
    body: JSON.stringify(body),
  });
  return serverData;
};

export const getCurrentUserRequest = async (params) => {
  const serverData = await Fetch.get('get-profile', params, {});
  return serverData;
};
