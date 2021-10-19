import React from 'react';
import TextInput from '.';
import { shallow, mount } from 'enzyme';
import { banksOptions } from '../../../../constants/inputOptions';
import { Formik } from 'formik';


describe('<SelectInput />', () => {
    it('renders button without crashing', () => {
        shallow(<Formik><TextInput name='render-test' /></Formik>);
    });
    
    it('receives props like it should', () => {
        const wrapper = mount(<Formik><TextInput name='text-input-test' /></Formik>);
    
        expect(wrapper.find('input').props().name).toEqual('text-input-test');
    });

})

    

