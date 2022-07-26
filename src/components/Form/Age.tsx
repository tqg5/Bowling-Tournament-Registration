import { useDispatch } from 'react-redux';
import MyInput from 'components/MyInput';
import constants from './constants'
import { saveAge } from 'store/form/slice';
import { Payload } from './hooks/useFormError';

const Age = ({
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
                placeholder='Age'
                name={constants.labels.age}
                sx={{
                    variant: 'forms.age'
                }}
                onChange={({ target: { value }}) => {
                    dispatch(saveAge(+value));
                }}
                hasError={!payload.isValid}
            />
        </>
    );
};

export default Age;