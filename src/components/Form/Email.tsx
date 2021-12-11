import React from 'react';
import { useDispatch } from 'react-redux';
import MyInput from 'components/MyInput';
import constants from './constants'
import { saveEmail } from 'store/form/slice';

const Email = React.forwardRef<HTMLInputElement>((props, ref) => {
    const dispatch = useDispatch();

    return (
        <>
            <MyInput
                ref={ref}
                sx={{
                    "&::placeholder": {
                        color: 'white'
                    },
                    variant: 'forms.email'
                }}
                name={constants.email}
                placeholder='Email'
                onChange={({ target: { value }}) => {
                    dispatch(saveEmail(value));
                }}
            />
        </>
    )
});

export default Email;