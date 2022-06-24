import * as Yup from 'yup';

const phoneRegExp = /^\+(?:[0-9] ?){6,14}[0-9]$/;

 const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
    .required('Required'),
    lastName: Yup.string()
    .required('Required'),
    email: Yup.string()
    .required('Required')
    .email('Invalid email.'),
    phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
    addressLine: Yup.string()
    .required('Required'),
    house: Yup.string()
    .required('Required'),
    flat: Yup.string()
    .required('Required'),
    code: Yup.number()
    .required('Required'),
    city: Yup.string()
    .required('Required'),
})


export default FORM_VALIDATION