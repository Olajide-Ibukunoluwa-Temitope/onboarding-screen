import React from 'react';
import SelectInput from '.';
import { shallow, mount } from 'enzyme';
import { banksOptions } from '../../../../constants/inputOptions';
import { Formik } from 'formik';


describe('<SelectInput />', () => {
    it('renders button without crashing', () => {
        shallow(<Formik><SelectInput options={banksOptions} name='render-test' /></Formik>);
    });
    
    it('receives props like it should', () => {
        const wrapper = mount(<Formik><SelectInput options={banksOptions} name='test' /></Formik>);
    
        expect(wrapper.find('select').props().name).toEqual('test');
    });
})

    

