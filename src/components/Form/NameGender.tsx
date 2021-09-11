import { FC } from 'react';
import { Flex } from 'theme-ui';
import MyInput from 'components/MyInput';
import MyRadio, {
    SEX
} from 'components/MyRadio';
import constants from './constants';
import { useDispatch } from 'react-redux';
import {
    saveFirstName,
    saveLastName,
    saveSex
} from 'store/form/slice';

const NameGender: FC = () => {
    const dispatch = useDispatch();

    return (
        <Flex
            sx={{
                variant: 'nameGenderWrapper'
            }}
        >
            <MyInput
                sx={{
                    variant: 'forms.firstName'
                }}
                name={constants.firstName}
                placeholder='First Name'
                onChange={({ target: { value }}) => {
                    dispatch(saveFirstName(value));
                }}
            />
            <MyInput
                sx={{
                    variant: 'forms.lastName'
                }}
                name={constants.lastName}
                placeholder='Last Name'
                onChange={({ target: { value }}) => {
                    dispatch(saveLastName(value));
                }}
            />
            <Flex>
                <MyRadio
                    name={constants.sex}
                    value={SEX.MALE}
                    defaultChecked={true}
                    onChange={({ target: { value }}) => {
                        dispatch(saveSex(value as SEX));
                    }}
                />
                <MyRadio
                    name={constants.sex}
                    value={SEX.FEMALE}
                    onChange={({ target: { value }}) => {
                        dispatch(saveSex(value as SEX));
                    }}
                />
            </Flex>
        </Flex>
    )
}

export default NameGender;