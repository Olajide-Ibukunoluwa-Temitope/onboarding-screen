import React, {useState} from 'react';
import OnboardingFrame from '../components/view/OnboardingFrame';
import StepOne from '../components/view/Form/StepOne';
import StepTwo from '../components/view/Form/StepTwo';
import StepThree from '../components/view/Form/StepThree';
import { formSteps } from '../constants/stepper';
import { Formik, Form } from 'formik';
import { bvnSchema, personalAcctNumSchema, socialHandleSchema, businessCatSchema } from '../helpers/validation/schema';

// main onboarding component
const Onboarding = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState([]);
    const [radioInputData, setRadioInputData] = useState({
        verificationMethod: 'BVN',
        usesPos: 'Yes',
    });

    // handle input change for custom radio input type
    const handleRadioInputChange = (event) => {
        switch (activeStep) {
            case 1:
                setRadioInputData({
                    ...radioInputData,
                    verificationMethod: event.target.textContent
                })
                break;
            case 3:
                setRadioInputData({
                    ...radioInputData,
                    usesPos: event.target.textContent
                });
                
                break;
        
            default:
                break;
        };
    };

    // handle what form to display depending on the step user is on
    const handleDisplayForm = (currentStep) => {
        switch (currentStep) {
            case 1:
                return <StepOne handleRadioInputChange={handleRadioInputChange} />;
            case 2:
                return <StepTwo />;
            case 3:
                return <StepThree handleRadioInputChange={handleRadioInputChange} />;
        
            default:
                return <StepOne handleRadioInputChange={handleRadioInputChange} />;
        }
    }

    // handle continue button behaviour
    const handleContinue = (values, actions) => {
        if (activeStep !== formSteps.length) {
            setActiveStep(activeStep + 1);
            setCompletedSteps([...completedSteps, activeStep]);
            actions.setTouched({});
        // }
        } else {
            const finalData = {
                ...values,
                ...radioInputData,
                abegHandle: values.abegHandle[0] === '@' ? values.abegHandle : '@' + values.abegHandle,
                instagramHandle: values.instagramHandle[0] === '@' ? values.instagramHandle : '@' + values.instagramHandle,
                twitterHandle: values.twitterHandle[0] === '@' ? values.twitterHandle : '@' + values.twitterHandle
            }
            console.log(finalData);
            alert(JSON.stringify(finalData));
            
        }
        
    };

    // handle switching to the appropriate schema to be used for validation depending on the step user is on
    const selectValidationSchema = () => {
        const validationArr = [{bvn: bvnSchema, acctnum: personalAcctNumSchema}, socialHandleSchema, businessCatSchema];
        const position = activeStep - 1;

        switch (activeStep) {
            case 1:
                if (radioInputData.verificationMethod === 'BVN') {
                    return validationArr[position].bvn
                } else{
                    return validationArr[position].acctnum
                }
        
            default:
                return validationArr[position];
        }
    };

    return (
        <div>
            <Formik
                initialValues={{
                    bvn: '',
                    acctNum: '',
                    bank: '',
                    abegHandle: '',
                    instagramHandle: '',
                    twitterHandle: '',
                    businessType: '',
                    businessCategory: '',
                }}
                validationSchema={selectValidationSchema()}
                onSubmit={handleContinue}
            >
                {({
                    handleSubmit,
                }) => {
                    return(
                        <OnboardingFrame 
                            activeStep={activeStep} 
                            changeActiveStep={setActiveStep}
                            completedSteps={completedSteps}
                            setCompletedSteps={setCompletedSteps}
                            steps={formSteps}
                            handleComplete={handleSubmit}
                        >
                            <Form>
                                {handleDisplayForm(activeStep)}
                            </Form>
                        </OnboardingFrame>
                    )
                }}
                    
            </Formik>
        </div>
    )
}


export default Onboarding;
