import { FC } from 'react';
import { useDispatch } from 'react-redux';
import MyInput from 'components/MyInput';
import constants from './constants'
import { saveCity } from '../../store/form/slice';

const City: FC = () => {
    const dispatch = useDispatch();

    return (
        <MyInput
            placeholder='City'
            name={constants.city}
            sx={{
                variant: 'forms.city'
            }}
            onChange={({ target: { value }}) => {
                dispatch(saveCity(value));
            }}
        />
    );
};

export default City;