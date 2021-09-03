import { FC } from 'react';
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

const MyInput: FC<MyInputProps> = ({ defaultValue = '', placeholder = '', ...rest }) => (
    <Input defaultValue={defaultValue} placeholder={placeholder} {...rest} />
);

export default MyInput;