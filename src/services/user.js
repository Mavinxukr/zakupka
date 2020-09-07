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

export const getCurrentUserRequest = async (params, cookies) => {
  const serverData = await Fetch.get('get-user', params, {}, cookies);
  return serverData;
};

export const logoutRequest = async (params, cookies) => {
  const serverData = await Fetch.post('logout', params, {}, cookies);
  return serverData;
};
