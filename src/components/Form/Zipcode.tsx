import { FC } from 'react';
import MyInput from 'components/MyInput';
import constants from './constants';

const Zipcode: FC = () => {
    return (
        <>
            <MyInput
                placeholder='Zipcode'
                name={constants.zipcode}
                sx={{
                    variant: 'forms.zipCode'
                }}
            />
        </>
    );
};

export default Zipcode;