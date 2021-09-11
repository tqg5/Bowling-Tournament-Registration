import { FC } from 'react';
import { useDispatch } from 'react-redux';
import MyInput from 'components/MyInput';
import constants from './constants'
import { saveAddress } from 'store/form/slice';

const Address: FC = () => {
    const dispatch = useDispatch();

    return (
        <MyInput
            name={constants.address}
            placeholder='Address'
            onChange={({ target: { value }}) => {
                dispatch(saveAddress(value));
            }}
        />
    )
}

export default Address;