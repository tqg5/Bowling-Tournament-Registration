import { FC } from 'react';
import MyInput from 'components/MyInput';
import constants from './constants'

const PhoneNumber: FC = () => {
    return (
        <>
            <MyInput
                type='number'
                placeholder='Phone Number'
                name={constants.phoneNumber}
                sx={{
                    variant: 'forms.email'
                }}
            />
        </>
    );
};

export default PhoneNumber;