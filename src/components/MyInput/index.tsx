import React, { FC } from 'react';

import { Input, ThemeUIStyleObject } from 'theme-ui';

interface MyInputProps {
    defaultValue?: string;
    placeholder?: string;
    type?: string;
    sx?: ThemeUIStyleObject;
    variant?: string;
    name: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const MyInput = React.forwardRef<HTMLInputElement, MyInputProps>(({defaultValue, placeholder, ...rest}, ref) => {
    return (
        <Input ref={ref} defaultValue={defaultValue} placeholder={placeholder} {...rest} />
    )
});
export default MyInput;