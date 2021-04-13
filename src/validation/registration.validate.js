import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("It field is required"),
  surname: yup.string().required("It field is required"),
  name_customer: yup.string().required("It field is required"),
  email: yup.string().email().required("It field is required"),
  phone: yup.string().required("It field is required"),
  role: yup.object().required("It field is required"),
  password: yup.string().required("It field is required"),
  password_confirmation: yup.string().oneOf([yup.ref('password')], 'Паролі повинні збігатися').required("It field is required"),
});