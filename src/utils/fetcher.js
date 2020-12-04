import React from 'react';
import qs from 'query-string';
import _ from 'lodash';
import { API_DOMAIN } from '../enums/api';
import FetchError from '../Components/shared/FetchError/FetchError';

const Fetcher = (method) => async (url, params, options, cookies) => {
  const paramsString = !_.isEmpty(params) ? `?${qs.stringify(params)}` : '';
  const body = await fetch(`${API_DOMAIN}${url}${paramsString}`, {
    method,
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: cookies,
    },
    ...options,
    redirect: 'follow',
  }).catch(() => <FetchError />);
  const serverData = await body.json();
  return serverData;
};

export const Fetch = {
  get: Fetcher('GET'),
  post: Fetcher('POST'),
  delete: Fetcher('DELETE'),
  patch: Fetcher('PATCH'),
};
