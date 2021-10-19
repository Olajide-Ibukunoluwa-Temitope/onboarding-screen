import * as yup from 'yup';

export const bvnSchema = yup.object().shape({
    bvn: yup.string()
        .required('Please fill in your BVN number')
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(11, 'Must not be less than 11 digits')
        .max(11, 'Must not be more than 11 digits')
});

export const personalAcctNumSchema = yup.object().shape({
    acctNum: yup.string()
            .required('Please fill in your account number')
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(10, 'Must not be less than 10 digits')
            .max(10, 'Must not be more than 10 digit'),
    bank:  yup.string().required('Please select your bank'),
});

export const socialHandleSchema = yup.object().shape({
    abegHandle: yup.string().required('Please fill in your abeg handle').matches(/^\S*$/, "no space allowed"),
    instagramHandle:  yup.string().matches(/^\S*$/, "no space allowed"),
    twitterHandle: yup.string().matches(/^\S*$/, "no space allowed"),
});

export const businessCatSchema = yup.object().shape({
    businessType: yup.string().required('Please select your type of business'),
    businessCategory:  yup.string().required('Please select the category of your business'),
});