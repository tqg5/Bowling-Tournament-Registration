import React, { FC } from 'react';
import { Radio, ThemeUIStyleObject, Label } from 'theme-ui';

export enum SEX {
    MALE = 'Male',
    FEMALE = 'Female'
};

interface MyInputProps {
    name: string;
    value: SEX;
    sx?: ThemeUIStyleObject;
    defaultChecked?: boolean;
    variant?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};


const MyInput = React.forwardRef<HTMLInputElement, MyInputProps>(({ name, value = SEX.MALE,  ...rest }, ref) => {
    return (
        <Label>
            <Radio name={name} value={SEX.MALE} {...rest} />
            {value}
        </Label>
    );
});

export default MyInput;