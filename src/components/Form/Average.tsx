import { useDispatch } from 'react-redux';
import MyInput from 'components/MyInput';
import constants from './constants'
import { saveAverage } from 'store/form/slice';
import { Payload } from './hooks/useFormError';

const Average = ({
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
                placeholder='Average'
                name={constants.labels.age}
                sx={{
                    variant: 'forms.average'
                }}
                onChange={({ target: { value }}) => {
                    dispatch(saveAverage(+value));
                }}
                hasError={!payload.isValid}
            />
        </>
    );
};

export default Average;