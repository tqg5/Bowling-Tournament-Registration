import { useDispatch } from 'react-redux';
import MyInput from 'components/MyInput';
import constants from './constants';
import { saveZipcode } from '../../store/form/slice';
import { Payload } from './hooks/useFormError';

const Zipcode = ({
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
                placeholder='Zipcode'
                name={constants.labels.zipcode}
                sx={{
                    variant: 'forms.zipCode'
                }}
                onChange={({ target: { value }}) => {
                    dispatch(saveZipcode(value));
                }}
                hasError={!payload.isValid}
            />
        </>
    );
};

export default Zipcode;