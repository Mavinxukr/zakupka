import React from 'react'

import './Input.scss';

const Input = (props) => {
  const classes = ['Input']

  if (props.clazz) {
    classes.push(props.clazz)
  }

  if (!props.validate && props.touched) {
    classes.push('Input_ErrorMessage')
  }
  
  return (
    <div className={classes.join(' ')} htmlFor={props.id}>
      <div className='Input-Top'>
        <span className='Input-Name'>{props.title}</span>
        {
          props.renderLink ? props.renderLink() : null
        }
      </div>
      <div className="Input-Box">
        <input className='Input-Inp'
          value={props.value}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.handleChenge}
          onBlur={props.handleBlur}
          onFocus={props.handleFocus}
          required={props.required}
        />
        {
          props.value !== '' && props.renderButton ? props.renderButton() : null
        }
      </div>
      <span className='Input-Error'>{!props.validate && props.touched ? props.errorMessage : ''}</span>
    </div>
  )
}

export default Input