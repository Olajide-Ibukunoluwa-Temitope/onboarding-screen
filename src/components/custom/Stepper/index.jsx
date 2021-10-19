import React from 'react';
import { ReactComponent as CompletedMarkIcon } from '../../../assets/icons/completed_mark.svg';

import './styles.css';


const Stepper = ({steps, activeStep, completedSteps}) => {
    const currentStep = steps[activeStep - 1].stepId;
     
    return (
        <div className='display-flex'>
            <div className='display-flex' id='stepper'>
                {steps.map((step) => {
                    const completedStep = completedSteps.find(completedStepId => completedStepId === step.stepId); // check if the current step in the loop is completed
                    const bgColor = activeStep === step.stepId ? '#006AFF' : completedStep === step.stepId ? '#DCEAFF' : '#E4E9EF'; // handle bg color if the current step in the loop is the active step or not
                    const titleColor = activeStep === step.stepId ? '#141737' : '#A5B4CB'; // handle title color if the current step in the loop is the active step or not
                    const stepNumColor = activeStep === step.stepId ? '#FFFFFF' : '#A5B4CB'; // handle step um color color if the current step in the loop is the active step or not

                    return(
                        <div key={step.stepId} className='step-container'>
                            <div 
                                className='step-num' 
                                style={{
                                    color: `${stepNumColor}`,
                                    backgroundColor: `${bgColor}`,
                                }}
                            >
                                {completedStep === step.stepId ? <CompletedMarkIcon /> : step.stepId}
                            </div>
                            <div className='stepper-title' style={{color: `${titleColor}`}}>{step.stepTitle}</div>
                        </div>
                    )
                    
                })}
            </div>
            <div id='mobile-stepper'>
                <div 
                    className='step-num' 
                    style={{
                        color: 'white',
                        backgroundColor: `#006AFF`,
                    }}
                >
                    {currentStep}
                </div>
            </div>
            
        </div>
        
    )
}

export default Stepper;
