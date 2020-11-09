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
export const kekv = generateAction('kekv');
