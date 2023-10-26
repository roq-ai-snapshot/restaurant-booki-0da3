import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().required(),
  phone_number: yup.string().nullable(),
  position: yup.string().required(),
  salary: yup.number().integer().required(),
  restaurant_id: yup.string().nullable().required(),
});
