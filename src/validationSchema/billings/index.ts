import * as yup from 'yup';

export const billingValidationSchema = yup.object().shape({
  oreder_summary: yup.string().nullable(),
  total_bill: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
