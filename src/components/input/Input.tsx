import { HTMLInputTypeAttribute } from 'react';
import * as Style from './Input.styles';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
    id?: string,
    type: HTMLInputTypeAttribute, 
    placeholder: string,
    register: UseFormRegisterReturn,
}

function Input({register, ...props}: InputProps) {

    return (
        <Style.Input {...register} {...props}/>
    );
}

export default Input;