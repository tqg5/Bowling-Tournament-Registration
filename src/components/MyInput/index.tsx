import React, { FC } from 'react';

import { Input, ThemeUIStyleObject } from 'theme-ui';

export interface MyInputProps {
    defaultValue?: string;
    placeholder?: string;
    type?: string;
    sx?: ThemeUIStyleObject;
    variant?: string;
    name: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    forwardedRef: React.ForwardedRef<HTMLInputElement>;
    hasError?: boolean;
};

const errorCSS = {
    borderColor: 'red'
}

const MyInput = ({defaultValue, placeholder, forwardedRef, hasError, ...rest}: MyInputProps) => {
    return (
        <Input 
            sx={hasError ? errorCSS : {}}
            ref={forwardedRef} defaultValue={defaultValue} placeholder={placeholder} {...rest} />
    )
};

export default MyInput;