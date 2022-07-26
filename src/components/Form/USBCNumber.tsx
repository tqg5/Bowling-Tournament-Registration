import { useDispatch } from 'react-redux';
import MyInput from 'components/MyInput';
import constants from './constants';
import { saveUSBCNumber } from '../../store/form/slice';
import { Payload } from './hooks/useFormError';

const USBCNumber = ({
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
                placeholder='USBC #'
                name={constants.labels.usbcNumber}
                sx={{
                    variant: 'forms.USBCNumber'
                }}
                onChange={({ target: { value }}) => {
                    dispatch(saveUSBCNumber(value));
                }}
                hasError={!payload.isValid}
            />
        </>
    );
};

export default USBCNumber;