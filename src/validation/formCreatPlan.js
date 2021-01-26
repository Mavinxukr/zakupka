import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  classification_description: Yup.string()
    .required('Це поле не може бути пустим!'),
  classification_id: Yup.string()
    .required('Це поле не може бути пустим!'),
  budget_amountNet: Yup.string()
    .required('Це поле не може бути пустим!'),
  budget_description: Yup.string()
    .required('Це поле не може бути пустим!'),
  budget_period_startDate: Yup.string()
    .required('Це поле не може бути пустим!'),
  budget_period_endDate: Yup.string()
    .required('Це поле не може бути пустим!'),
  project_name: Yup.string()
    .required('Це поле не може бути пустим!'),
  project_id: Yup.string()
    .required('Це поле не може бути пустим!'),
  currency: Yup.string()
    .required('Це поле не може бути пустим!'),
  amount: Yup.string()
    .required('Це поле не може бути пустим!'),
  budget_id: Yup.string()
    .required('Це поле не може бути пустим!'),
  tender_procurementMethodType: Yup.string()
    .required('Це поле не може бути пустим!'),
});
