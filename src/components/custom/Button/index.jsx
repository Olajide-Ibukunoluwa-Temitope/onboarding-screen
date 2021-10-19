import React from 'react';
import './styles.css';

const Custombutton = ({title, bgColor, onclick, type}) => {
    return (
        <button id='custom-btn' style={{backgroundColor: `${bgColor}`}} type={type} onClick={onclick}>
            {title}
        </button>
    )
}

export default Custombutton;
