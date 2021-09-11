import { FC } from 'react';
import { useDispatch } from 'react-redux';
import MyInput from 'components/MyInput';
import constants from './constants'
import { savePhoneNumber } from 'store/form/slice';

const PhoneNumber: FC = () => {
    const dispatch = useDispatch();

    return (
        <>
            <MyInput
                type='number'
                placeholder='Phone Number'
                name={constants.phoneNumber}
                sx={{
                    variant: 'forms.email'
                }}
                onChange={({ target: { value }}) => {
                    dispatch(savePhoneNumber(value));
                }}
            />
        </>
    );
};

export default PhoneNumber;