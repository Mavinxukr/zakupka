const generateAction = (namespace) => ({
  request: `${namespace}/request`,
  success: `${namespace}/success`,
  error: `${namespace}/error`,
  save: `${namespace}/save`,
  update: `${namespace}/update`,
  delete: `${namespace}/delete`,
});

export const currentUser = generateAction('currentUser');
export const tenders = generateAction('tenders');
export const plans = generateAction('plans');
export const onePlan = generateAction('onePlan');
export const moneyType = generateAction('moneyType');
export const classifierCode = generateAction('classifierCode');
export const tendersType = generateAction('tendersType');
export const companyType = generateAction('companyType');
export const regions = generateAction('regions');
export const country = generateAction('country');
export const createPlan = generateAction('createPlan');
export const createTender = generateAction('createTender');
export const editUser = generateAction('editUser');
