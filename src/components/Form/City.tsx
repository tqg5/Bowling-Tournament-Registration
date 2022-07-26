import { useDispatch } from 'react-redux';
import MyInput from 'components/MyInput';
import constants from './constants'
import { saveCity } from '../../store/form/slice';
import { Payload } from './hooks/useFormError';

const City = ({
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
            placeholder='City'
            name={constants.labels.city}
            sx={{
                variant: 'forms.city'
            }}
            onChange={({ target: { value }}) => {
                dispatch(saveCity(value));
            }}
            hasError={!payload.isValid}
        />
    );
};

export default City;