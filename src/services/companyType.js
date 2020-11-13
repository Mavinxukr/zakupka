import { Fetch } from '../utils/fetcher';

export const getCompanyTypeRequest = async (params, cookies) => {
  const companyData = await Fetch.get('type-company', params, {}, cookies);
  return companyData;
};
