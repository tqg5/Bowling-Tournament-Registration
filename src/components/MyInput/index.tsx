import { FC } from 'react';
import { Input } from 'theme-ui';

interface MyInputProps {
    defaultValue?: string;
    placeholder?: string;
};

const MyInput: FC<MyInputProps> = ({ defaultValue = '', placeholder = '' }) => (
    <Input defaultValue={defaultValue} placeholder={placeholder} />
);

export default MyInput;