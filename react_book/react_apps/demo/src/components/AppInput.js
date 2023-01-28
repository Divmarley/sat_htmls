/** @format */

import React from 'react';

export default function AppInput({type,id,name,placeholder,className,onChange}) {
  return (
    <div class='col-md-12 form-group'>
      <input
        type={type}
        className={className}
        id={id}
        
        name={name}
        placeholder={placeholder}
        onfocus="this.placeholder = ''"
        onblur={`this.placeholder = '${name}'`}
        onChange={onChange}
      />
    </div>
  );
}
