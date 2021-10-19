import React from 'react';
import StepOne from '.';
import { mount, render, shallow } from 'enzyme';
import { Formik } from 'formik';

describe('<StepOne />', () => {
    let wrapper;
    let mockOne = jest.fn();
    let mockTwo = jest.fn();

    beforeEach(() => {
        wrapper = mount(<Formik><StepOne handleChange={mockOne} handleRadioInputChange={mockTwo} /></Formik>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('renders without crashing', () => {
        shallow(<Formik><StepOne /></Formik>);
    });
    
    it('radio input receives clicks', () => {
    
        expect(mockTwo).toBeCalledTimes(0);
        wrapper.find('button.radio-option').at(0).simulate('click');
        expect(mockTwo).toBeCalledTimes(1);
    });

    it('radio input diplays bvn field when bvn option is selected', () => {

        wrapper.find('button.radio-option').at(0).simulate('click');
        expect(wrapper.find('.bvn-input-section .sub-heading').at(0).text()).toEqual('Bank Verification Number (11-digits)')
    });

    it('renders appropriate number of steps', () => {

        expect(mockTwo).toBeCalledTimes(0);
        wrapper.find('button.radio-option').at(1).simulate('click');
        expect(mockTwo).toBeCalledTimes(1);
    });

    it('radio input diplays person account number fields when person account number option is selected', () => {

        wrapper.find('button.radio-option').at(1).simulate('click');
        expect(wrapper.find('.half-width .sub-heading').at(1).text()).toEqual('Select Bank')
    });

})


    

