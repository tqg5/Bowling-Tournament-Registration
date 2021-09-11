import { FC } from 'react';
import { useDispatch } from 'react-redux';
import MyInput from 'components/MyInput';
import constants from './constants';
import { saveZipcode } from '../../store/form/slice';

const Zipcode: FC = () => {
    const dispatch = useDispatch();

    return (
        <>
            <MyInput
                placeholder='Zipcode'
                name={constants.zipcode}
                sx={{
                    variant: 'forms.zipCode'
                }}
                onChange={({ target: { value }}) => {
                    dispatch(saveZipcode(value));
                }}
            />
        </>
    );
};

export default Zipcode;