import React from 'react';
import { useDispatch } from 'react-redux';
import MyInput from 'components/MyInput';
import constants from './constants'
import { saveEmail } from 'store/form/slice';
import { Payload } from './hooks/useFormError';

interface EmailProps {
    forwardedRef: React.ForwardedRef<HTMLInputElement>;
    payload: Payload;
}
const Email = ({
    forwardedRef,
    payload
}: EmailProps) => {
    const dispatch = useDispatch();

    return (
        <>
            <MyInput
                forwardedRef={forwardedRef}
                sx={{
                    "&::placeholder": {
                        color: 'white'
                    },
                    variant: 'forms.email'
                }}
                name={constants.labels.email}
                placeholder='Email'
                onChange={({ target: { value }}) => {
                    dispatch(saveEmail(value));
                }}
                hasError={!payload.isValid}
            />
        </>
    )
};

export default Email;