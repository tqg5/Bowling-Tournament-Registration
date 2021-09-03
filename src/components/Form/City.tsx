import { FC } from 'react';
import MyInput from 'components/MyInput';
import constants from './constants'

const City: FC = () => {
    return (
        <MyInput
            placeholder='City'
            name={constants.city}
            sx={{
                variant: 'forms.city'
            }}
        />
    );
};

export default City;