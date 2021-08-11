import React from 'react'

import './form-input.styles.scss'
// *all the otherProps will get passedontho onChange and then we are going to spreadthe otehr props here so all these other props will end being
// * with label prop, we are actually going to selectily render a label becuase we don't know if we actaully need it or not
const FormInput = ({handleChange, label, ...otherProps})  => (
    <div className="group">
        <input className='form-input' onChange={handleChange} {...otherProps}/>
            {/* if a user/developer passes in a label.... */}
                {/* if our value is in, the we are going to apply the class of shrink... */}
                {/* othersise.... it's an empty string */}
            {label ? (
            <label
                className={`${
                otherProps.value.length ? 'shrink' : ''
                } form-input-label`}
            >
                {label}
            </label>
            ) : null}
    </div>
)
export default FormInput