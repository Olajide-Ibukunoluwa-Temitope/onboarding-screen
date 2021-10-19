import React, {useState} from 'react';
import {ReactComponent as LockIcon} from '../../../../assets/icons/lock.svg';
import {ReactComponent as AccordionToggleIcon} from '../../../../assets/icons/arrow_up.svg';
import {ReactComponent as ListIcon} from '../../../../assets/icons/green_mark.svg';
import {ReactComponent as KeyLockIcon} from '../../../../assets/icons/lock_and_key.svg';
import TextInput from '../../../custom/InputField/TextInput';
import SelectInput from '../../../custom/InputField/SelectInput';
import StyledRadioInput from '../../../custom/InputField/StyledRadioInput';
import { banksOptions, verificationOptions } from '../../../../constants/inputOptions';

import './styles.css';

const VerifyByBvn = ({toggleAccordion, show}) => {
    return(
        <div>
            <div className='bvn-input-section'>
                <TextInput 
                    inputlabel={'Bank Verification Number (11-digits)'} 
                    name='bvn'
                />
            </div>
            <div className={`bvn-info-section ${show ? 'bvn-info-section-expanded' : ''}`}>
                <div className='display-flex bvn-info-title-section'>
                    <div className='display-flex'>
                        <div id='lock-icon'>
                            <LockIcon />
                        </div>
                        <span id='bvn-info-title'>Why we need your BVN</span>
                    </div>
                    <div className=' accordion-toggle-section' onClick={toggleAccordion}>
                        {
                            show ? (
                                <div className='display-flex hide-content'>
                                    <span id='accordion-toggle-text'>Hide</span>
                                    <div id='hide-accordion-content-icon'>
                                        <AccordionToggleIcon />
                                    </div>
                                </div>
                            ) : (
                                <div className='display-flex'>
                                    <span id='accordion-toggle-text'>Show</span>
                                    <div id='show-accordion-content-icon'>
                                        <AccordionToggleIcon />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

                <div id='accordion-content' className={`${show ? 'show' : 'hide'}`}>
                    <div id='accordion-body'>
                        <p>We only need access to your:</p>
                        <div>
                            <p>
                                <ListIcon />
                                <span className='accordion-content-icon-pair'>Full Name</span>
                            </p>
                            <p>
                                <ListIcon />
                                <span className='accordion-content-icon-pair'>Phone Number</span>
                            </p>
                            <p>
                                <ListIcon />
                                <span className='accordion-content-icon-pair'>Date of Birth</span>
                            </p>
                        </div>
                    </div>
                    <div id='accordion-footer'>
                        <p>
                            <KeyLockIcon />
                            <span className='accordion-content-icon-pair'>Your BVN does not give us access to your bank accounts or transactions</span>
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

const VerifyByAcctNum = () => {

    return(
        <div id='verify-acct-num-container'>
            <div className='display-flex input-field-pair-row resp-input-field-pair-col'>
                <div className='half-width resp-input-width resp-mb'>
                    <TextInput 
                        inputlabel={'Account Number'} 
                        name={'acctNum'} 
                    />
                </div>
                <div className='half-width resp-input-width resp-mb'>
                    <SelectInput 
                        inputlabel='Select Bank' 
                        options={banksOptions} 
                        name={'bank'} 
                    />
                </div>
            </div>
        </div>
    )
}

const StepOne = ({handleChange, handleRadioInputChange}) => {
    const [activeVerificationOptionId, setActiveVerificationOptionId] = useState(1);
    const [showAccordionContent, setShowAccordioncontent] = useState(false);

    const handleChangeVerificationOption = (id) => {
        setActiveVerificationOptionId(id);
    };

    const handleAccordionToggle = () => {
        setShowAccordioncontent(!showAccordionContent);
    };

    // handle what input fields to show depending on if user pick bvn or personal acct num
    const displayActiveVerificationFields = (activeId) => {
        switch (activeId) {
            case 1:
                return (
                    <VerifyByBvn 
                        toggleAccordion={handleAccordionToggle} 
                        show={showAccordionContent} 
                        handleChange={handleChange}
                    />
                );
                
            case 2:
                return <VerifyByAcctNum handleChange={handleChange}  />   
        
            default:
                return (
                    <VerifyByBvn 
                        toggleAccordion={handleAccordionToggle} 
                        show={showAccordionContent} 
                        handleChange={handleChange}
                    />
                );
                
        }
    };

    return (
        <div>
            <div>
                <p className='sub-heading'>Select a verification method</p>
                <div className='verification-option-section resp-mb'>
                    {
                        verificationOptions.map(({id, optionTitle}) => (
                            <div key={id} onClick={() => handleChangeVerificationOption(id)}>
                                <StyledRadioInput 
                                    title={optionTitle} 
                                    id={id} 
                                    activeOptionId={activeVerificationOptionId} 
                                    onClick={handleRadioInputChange}
                                />
                            </div>
                        ))
                    }
                </div>
                <div>
                    {displayActiveVerificationFields(activeVerificationOptionId)}   
                </div>
                
            </div>
        </div>
    );
};

export default StepOne;
