import { FC } from 'react';
import { useDispatch } from 'react-redux';
import MyInput from 'components/MyInput';
import constants from './constants'
import { saveEmail } from 'store/form/slice';

const Email: FC = () => {
    const dispatch = useDispatch();

    return (
        <>
            <MyInput
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
}

export default Email;