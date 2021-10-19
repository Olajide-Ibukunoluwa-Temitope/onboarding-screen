import React from 'react';
import StepThree from '.';
import { mount, shallow } from 'enzyme';
import { Formik } from 'formik';

describe('<StepThree />', () => {
    let wrapper;
    let mockTwo = jest.fn();

    beforeEach(() => {
        wrapper = mount(<Formik><StepThree handleRadioInputChange={mockTwo} /></Formik>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('renders without crashing', () => {
        shallow(<Formik><StepThree /></Formik>);
    });
    
    it('radio input receives clicks', () => {
    
        expect(mockTwo).toBeCalledTimes(0);
        wrapper.find('button.radio-option').at(0).simulate('click');
        expect(mockTwo).toBeCalledTimes(1);
    });

})


    

