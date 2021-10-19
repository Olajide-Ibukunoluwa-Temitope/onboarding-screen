import React from 'react';
import './styles.css';

const StyledRadioInput = ({title, id, activeOptionId, onClick}) => {
    const bgColor = id === activeOptionId ? '#DCEAFF' : '#F5F6FA'; // for bg color if the radio option is the active one or not
    const border = id === activeOptionId ? '1px solid #006AFF' : '1px solid rgba(20, 23, 55, 0.1)'; // for border color if the radio option is the active one or not

    return (
        <button className='radio-option' style={{backgroundColor: `${bgColor}`, border: `${border}`}} type='button' onClick={onClick}>
            {title}
        </button>
    );
};

export default StyledRadioInput;
