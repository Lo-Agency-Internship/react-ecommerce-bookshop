import * as yup from 'yup'
export const priceSchema = yup.object().shape({
    price: yup.number().required().positive().integer(),
});
export const authorSchema = yup.object().shape({
    author: yup.string().required(),
});
export const titleSchema = yup.object().shape({
    title: yup.string().required(),
});

export const genreSchema = yup.object().shape({
    genre: yup.string().required(),
});
export const publisherSchema = yup.object().shape({
    publisher: yup.string().required(),
});
