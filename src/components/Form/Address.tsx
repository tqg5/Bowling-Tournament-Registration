import { useDispatch } from 'react-redux';
import MyInput from 'components/MyInput';
import constants from './constants'
import { saveAddress } from 'store/form/slice';
import { Payload } from './hooks/useFormError';

const Address = ({
    forwardedRef,
    payload
}: {
    forwardedRef: React.ForwardedRef<HTMLInputElement>;
    payload: Payload;
}) => {
    const dispatch = useDispatch();

    return (
        <MyInput
            forwardedRef={forwardedRef}
            name={constants.labels.address}
            placeholder='Address'
            onChange={({ target: { value }}) => {
                dispatch(saveAddress(value));
            }}
            hasError={!payload.isValid}
        />
    )
}

export default Address;