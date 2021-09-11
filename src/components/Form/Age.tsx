import { FC } from 'react';
import { useDispatch } from 'react-redux';
import MyInput from 'components/MyInput';
import constants from './constants'
import { saveAge } from 'store/form/slice';

const Age: FC = () => {
    const dispatch = useDispatch();

    return (
        <>
            <MyInput
                type='number'
                placeholder='Age'
                name={constants.age}
                sx={{
                    variant: 'forms.age'
                }}
                onChange={({ target: { value }}) => {
                    dispatch(saveAge(+value));
                }}
            />
        </>
    );
};

export default Age;