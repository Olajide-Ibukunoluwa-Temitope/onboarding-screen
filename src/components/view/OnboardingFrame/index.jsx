import React from 'react';
import Button from '../../custom/Button';
import Stepper from '../../custom/Stepper';

import './styles.css';

// main onboarding screen frame containing the left image, the logout btn, stepper, continue btn, etc..
const OnboardingFrame = ({activeStep, completedSteps, steps, handleComplete, children}) => {

    const btnTitle = activeStep === 2 ? 'Confirm Social Handles' : activeStep === steps.length ? 'Complete' : 'Continue';
    const currentStepTitle = steps[activeStep - 1].stepTitle;
    const currentStepDesc = steps[activeStep - 1].stepDesc ? steps[activeStep - 1].stepDesc : '';

    return (
        <div id='onboarding-container'>
            <div id='onboarding-img-section'></div>
            <div id='onboarding-content-container'>
                <div className='btn-container' id='logout-btn'>
                    <Button title='Logout' bgColor='#FF6774' type='button' />
                </div>
                <div id='stepper-section'>
                    <Stepper steps={steps} activeStep={activeStep} completedSteps={completedSteps} />
                </div>
                <div id='step'>
                    Step {activeStep}/{steps.length}
                </div>
                <div id='title-container'>
                    <p id='step-title'>{currentStepTitle}</p>
                    <p id='step-desc'>{currentStepDesc}</p>
                </div>
                <div id='children-container'>
                    {children}
                </div>
                <div className='btn-container next-btn-container'>
                    <Button title={btnTitle} bgColor='#006AFF' onclick={handleComplete} type='submit' />
                </div>
            </div>
        </div>
    )
}

export default OnboardingFrame;
