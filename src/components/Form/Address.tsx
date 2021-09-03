import { FC } from 'react';
import MyInput from 'components/MyInput';
import constants from './constants'

const Address: FC = () => {
    return (
        <MyInput
            name={constants.address}
            placeholder='Address'
        />
    )
}

export default Address;