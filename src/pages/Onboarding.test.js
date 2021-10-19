import React from 'react';
import OnBoarding from './Onboarding';
import { mount } from 'enzyme';

describe('<OnBoarding />', () => {
    it('renders without crashing', () => {
        mount(<OnBoarding />);
    });
})


    

