import qs from 'query-string';
import _ from 'lodash';
import { cookies } from 'js-cookie';
import { API_DOMAIN } from '../enums/api';

export const generalOptions = (co) => ({
  mode: 'cors',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: co ? co.get('tokenProzorro') : '',
  },
});

const Fetcher = (method) => async (url, params, options) => {
  const paramsString = !_.isEmpty(params) ? `?${qs.stringify(params)}` : '';
  const body = await fetch(`${API_DOMAIN}${url}${paramsString}`, {
    method,
    ...generalOptions(cookies),
    ...options,
    redirect: 'follow',
  });
  const serverData = await body.json();
  return serverData;
};

export const Fetch = {
  get: Fetcher('GET'),
  post: Fetcher('POST'),
  delete: Fetcher('DELETE'),
};
