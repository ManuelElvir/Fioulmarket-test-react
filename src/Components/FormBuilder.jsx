import React from 'react'
import Input from './Input'


const FormBuilder = ({formName, formData, register}) => {
    return <>
        {formData.map(item => (
            <Input
                key={`${formName}.${item.name}`}
                {...item}
                register={register}
            />
        ))}
    </>
}

export default FormBuilder