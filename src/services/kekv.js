import { Fetch } from '../utils/fetcher';

export const getKEKVRequest = async (params) => {
  const dataType = await Fetch.get('classificationKEKV', params, {});
  console.log(dataType);
  return dataType;
};
