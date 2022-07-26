import React, { FC } from 'react';
import { Radio, ThemeUIStyleObject, Label } from 'theme-ui';

export enum SEX {
    MALE = 'Male',
    FEMALE = 'Female'
};

export interface MyRadioProps {
    name: string;
    value: string;
    sx?: ThemeUIStyleObject;
    defaultChecked?: boolean;
    variant?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    forwardedRef: React.ForwardedRef<HTMLInputElement>;
    label: SEX;
};


const MyRadio = ({ name, value = SEX.MALE, forwardedRef, label,  ...rest }: MyRadioProps) => {
    return (
        <Label>
            <Radio ref={forwardedRef} name={name} value={value} {...rest} />
            {label}
        </Label>
    );
};

export default MyRadio;