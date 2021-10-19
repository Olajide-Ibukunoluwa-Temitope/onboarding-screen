import React from 'react';
import OnBoardingFrame from '.';
import { mount } from 'enzyme';
import { Formik } from 'formik';
import {formSteps} from '../../../constants/stepper';
import StepOne from '../Form/StepOne';
import StepTwo from '../Form/StepTwo';
import StepThree from '../Form/StepThree';

describe('<OnBoardingFrame />', () => {
    let mockOne = jest.fn();
    let mockTwo = jest.fn();


    it('renders step one without crashing', () => {
        mount(<Formik>
            <OnBoardingFrame 
                activeStep={1}
                completedSteps={[]}
                steps={formSteps}
                handleComplete={mockOne}
            >
                <StepOne handleChange={mockOne} handleRadioInputChange={mockTwo} />
            </OnBoardingFrame>
        </Formik>);
    });

    it('renders step two without crashing', () => {
        mount(<Formik>
            <OnBoardingFrame 
                activeStep={2}
                completedSteps={[1]}
                steps={formSteps}
                handleComplete={mockOne}
            >
                <StepTwo />
            </OnBoardingFrame>
        </Formik>);
    });

    it('renders step three without crashing', () => {
        mount(<Formik>
            <OnBoardingFrame 
                activeStep={2}
                completedSteps={[1,2]}
                steps={formSteps}
                handleComplete={mockOne}
            >
                <StepThree handleRadioInputChange={mockTwo} />
            </OnBoardingFrame>
        </Formik>);
    });

})


    

