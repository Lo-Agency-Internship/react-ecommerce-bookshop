import * as yup from 'yup'


export const nameSchema = yup.object().shape({
    name: yup.string().required(),
});
export const emailSchema = yup.object().shape({
    email: yup.string().email().required(),
});
export const passwordSchema = yup.object().shape({
    password: yup.string().min(8).max(12).required(),
});
