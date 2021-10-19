import React from 'react';
import { useField } from 'formik';
import './styles.css'

const SelectInput = (props) => {
    const [field, meta] = useField(props.name);
    return (
        <div>
            <p className='sub-heading'>{props.inputlabel}</p>
            <div className='select-input-container'>
                <select 
                    className='select-input'
                    {...field}
                    {...props}
                >
                    <option value=""></option>
                    {props.options.map((option) => (
                        <option key={option.id} value={`${option.value}`} >{option.value}</option>
                    ))}
                </select>
                {meta.error && meta.touched && <p className='error'>*{meta.error}</p>}
            </div>
            
        </div>
    )
}

export default SelectInput;
