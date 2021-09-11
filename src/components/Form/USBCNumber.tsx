import { FC } from 'react';
import { useDispatch } from 'react-redux';
import MyInput from 'components/MyInput';
import constants from './constants';
import { saveUSBCNumber } from '../../store/form/slice';

const USBCNumber: FC = () => {
    const dispatch = useDispatch();

    return (
        <>
            <MyInput
                placeholder='USBC #'
                name={constants.usbcNumber}
                sx={{
                    variant: 'forms.USBCNumber'
                }}
                onChange={({ target: { value }}) => {
                    dispatch(saveUSBCNumber(value));
                }}
            />
        </>
    );
};

export default USBCNumber;