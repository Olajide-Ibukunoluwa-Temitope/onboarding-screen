import React from 'react';
import Stepper from '.';
import { mount, shallow } from 'enzyme';
import { formSteps } from '../../../constants/stepper';

describe('<Stepper />', () => {
    it('renders without crashing', () => {
        shallow(<Stepper steps={formSteps} activeStep={1} completedSteps={[]} />);
    });
    
    it('receives props like it should', () => {
        const wrapper = mount(<Stepper steps={formSteps} activeStep={1} completedSteps={[]} />);
    
        expect(wrapper.props().steps).toEqual(formSteps);
    });

    it('renders appropriate number of steps', () => {
        const wrapper = shallow(<Stepper steps={formSteps} activeStep={1} completedSteps={[]} />);
        
        expect(wrapper.find('.step-container').length).toEqual(formSteps.length);
    });
})


    

