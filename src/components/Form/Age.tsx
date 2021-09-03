import { FC } from 'react';
import MyInput from 'components/MyInput';
import constants from './constants'

const Age: FC = () => {
    return (
        <>
            <MyInput
                type='number'
                placeholder='Age'
                name={constants.age}
                sx={{
                    variant: 'forms.age'
                }}
            />
        </>
    );
};

export default Age;