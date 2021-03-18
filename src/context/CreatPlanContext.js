import { createContext } from 'react';

export const CreatPlanContext = createContext({
  tenderType: null,
  selectTenderType: () => {},
  classificatorDK: null,
  selectClassificationDK: () => {},
  classificationsKEKV: [],
  addKekv: () => {},
  removeKekv: () => {},
});
