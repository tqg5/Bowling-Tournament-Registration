import { useDispatch } from 'react-redux';
import MyInput from 'components/MyInput';
import constants from './constants'
import { savePhoneNumber } from 'store/form/slice';
import { Payload } from './hooks/useFormError';

const PhoneNumber = ({
    forwardedRef,
    payload
}: {
    forwardedRef: React.ForwardedRef<HTMLInputElement>;
    payload: Payload;
}) => {
    const dispatch = useDispatch();

    return (
        <>
            <MyInput
                forwardedRef={forwardedRef}
                type='number'
                placeholder='Phone Number'
                name={constants.labels.phoneNumber}
                sx={{
                    variant: 'forms.email'
                }}
                onChange={({ target: { value }}) => {
                    dispatch(savePhoneNumber(value));
                }}
                hasError={!payload.isValid}
            />
        </>
    );
};

export default PhoneNumber;