import * as Yup from 'yup';
// Validate login
export const loginSchema = Yup.object().shape({
    email: Yup.string().required().email().label( 'Email' ),
    password: Yup.string().required().min(6).label( 'Password' )
});
// Validate Register
export const registerSchema = Yup.object().shape({
    name: Yup.string().required().label( 'Name' ),
    email: Yup.string().required().email().label( 'Email' ),
    password: Yup.string().required().min(6).label( 'Password' ),
    terms:Yup.bool().oneOf([true,'You need to accept the terms and conditions'])
});
// Validate Profile
let url = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
export const partnerSchema = Yup.object().shape({
    name: Yup.string().required().label( 'Name' ),
    email: Yup.string().required().email().label( 'Email' ),
    password: Yup.string().required().min(6).label( 'Password' ),
    

    twitter: Yup.string().matches(url),
    facebook: Yup.string().matches(url),
    linkedin: Yup.string().matches(url),
    youtube: Yup.string().matches(url)
});

export const blogCommentSchema = Yup.object().shape({
    name: Yup.string().required().label( 'Name' ),
    email: Yup.string().required().email().label( 'Email' ),
    msg: Yup.string().required().min(20).label( 'Message' )
});

export const contactSchema = Yup.object().shape({
    name: Yup.string().required().label( 'Name' ),
    email: Yup.string().required().email().label( 'Email' ),
    phone: Yup.string().required().min(11).label( 'Phone' ),
    msg: Yup.string().required().min(20).label( 'Message' )
});

export const courseSchema = Yup.object().shape({
    title: Yup.string().required().label( 'Title' ),
    name: Yup.string().required().label( 'Name' ),
    email: Yup.string().required().email().label( 'Email' ),
    msg: Yup.string().required().min(20).label( 'Summery' )
});