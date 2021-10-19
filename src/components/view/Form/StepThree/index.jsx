import React from 'react';
import SelectInput from '../../../custom/InputField/SelectInput';
import StyledRadioInput from '../../../custom/InputField/StyledRadioInput';
import { businessCategoryOptions, businessType } from '../../../../constants/inputOptions';
import { yesAndNoOptions } from '../../../../constants/inputOptions';

const StepThree = ({handleRadioInputChange}) => {
    const [activeRadioOptionId, setActiveRadioOptionId] = React.useState(1);

    const handleChangeRadioOption = (id) => {
        setActiveRadioOptionId(id);
    };
    
    return (
        <div>
            <div className='display-flex input-section-mb input-field-pair-row resp-input-field-pair-col'>
                <div className='half-width resp-input-width resp-mb'>
                    <SelectInput 
                        inputlabel='Type of your business' 
                        options={businessType} 
                        name='businessType' 
                    />
                </div>
                <div className='half-width resp-input-width'>
                    <SelectInput 
                        inputlabel='Business Category' 
                        options={businessCategoryOptions} 
                        name='businessCategory' 
                    />
                </div>
                
            </div>
            <div>
                <p className='sub-heading'>Do you use POS machines for your business?</p>
                <div className='display-flex'>
                    {
                        yesAndNoOptions.map(({id, optionTitle}) => (
                            <div key={id} onClick={() => handleChangeRadioOption(id)}>
                                <StyledRadioInput 
                                    title={optionTitle} 
                                    id={id} 
                                    activeOptionId={activeRadioOptionId} 
                                    onClick={handleRadioInputChange}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default StepThree;
