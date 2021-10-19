import React from 'react';
import TextInput from '../../../custom/InputField/TextInput';
import './styles.css';

const StepTwo = () => {
    return (
        <div>
            <div className='display-flex input-section-mb'>
                <div className='half-width resp-input-width'>
                    <TextInput
                        inputlabel='Choose Your Abeg Tag (required)'
                        placeholder='@'
                        name='abegHandle'
                    />
                </div>
            </div>
            <div className='display-flex input-field-pair-row resp-input-field-pair-col'>
                <div className='half-width resp-input-width resp-mb'>
                    <TextInput
                        inputlabel='Instagram'
                        placeholder='@'
                        name='instagramHandle'
                    />
                </div>
                <div className='half-width resp-input-width resp-mb'>
                    <TextInput
                        inputlabel='Twitter'
                        placeholder='@'
                        name='twitterHandle'
                    />
                </div>
            </div>
        </div>
    )
}

export default StepTwo;
