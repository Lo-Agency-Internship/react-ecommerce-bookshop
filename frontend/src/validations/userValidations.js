import * as yup from 'yup'

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    username: yup.string().email().required(),
    password: yup.string().min(8).max(12).required(),
});