import { FC } from 'react';
import MyInput from 'components/MyInput';
import constants from './constants';

const USBCNumber: FC = () => {
    return (
        <>
            <MyInput
                placeholder='USBC #'
                name={constants.usbcNumber}
                sx={{
                    variant: 'forms.USBCNumber'
                }}
            />
        </>
    );
};

export default USBCNumber;