import React from 'react';
import { useField } from 'formik';
import './styles.css'

const TextInput = (props) => {
    const [field, meta] = useField(props.name);
    return (
        <div>
            {props.inputlabel && <p className='sub-heading'>{props.inputlabel}</p>}
            <input 
                className='text-input'
                {...field}
                {...props}
            />
            {meta.error && meta.touched && <p className='error'>*{meta.error}</p>}
        </div>
    )
}

export default TextInput;
