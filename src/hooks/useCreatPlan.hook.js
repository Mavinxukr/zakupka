import { useState, useCallback, useEffect } from 'react';

export const useCreatPlan = () => {
  const [tenderType, setTenderType] = useState('Спрощена/Допорогова закупівля');
  const [classificatorDK, setClassificatorDK] = useState('');
  const [classificationsKEKV, setClassificationKEKV] = useState([]);

  const selectTenderType = useCallback((ev) => {
    setTenderType(ev.target.value);
  });

  const selectClassificationDK = useCallback((ev) => {
    setClassificatorDK(ev.target.value);
  });

  const addKekv = useCallback((ev) => {
    setClassificationKEKV(ev.target.value);
  });

  const removeKekv = useCallback((ev) => {
    setClassificationKEKV(ev.target.value);
  });

  return {
    tenderType,
    selectTenderType,
    classificatorDK,
    selectClassificationDK,
    classificationsKEKV,
    addKekv,
    removeKekv,
  };

  // useEffect(() => {
  //   const ls = JSON.parse(localStorage.getItem('userData'));
  //   if (ls && ls.token) {
  //     login(ls.token, ls.userId);
  //   }
  //   setReady(true);
  // }, [login]);
  // return { login, logout, token, userId, ready };
};
