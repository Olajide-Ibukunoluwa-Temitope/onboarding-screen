import React from 'react';
import StepTwo from '.';
import { mount, shallow } from 'enzyme';
import { Formik } from 'formik';

describe('<StepTwo />', () => {
    it('renders without crashing', () => {
        shallow(<Formik><StepTwo /></Formik>);
    });

})


    

