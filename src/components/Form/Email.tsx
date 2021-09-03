import { FC } from 'react';
import MyInput from 'components/MyInput';
import constants from './constants'

const Email: FC = () => {
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
            />
        </>
    )
}

export default Email;