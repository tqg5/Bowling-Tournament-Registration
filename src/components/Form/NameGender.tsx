import { FC } from 'react';
import { Flex } from 'theme-ui';
import MyInput from 'components/MyInput';
import MyRadio, {
    SEX
} from 'components/MyRadio';
import constants from './constants';

const NameGender: FC = () => {
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

                }}
            />
            <MyInput
                sx={{
                    variant: 'forms.lastName'
                }}
                name={constants.lastName}
                placeholder='Last Name'
            />
            <Flex>
                <MyRadio
                    name={constants.sex}
                    value={SEX.MALE}
                    defaultChecked={true}
                />
                <MyRadio
                    name={constants.sex}
                    value={SEX.FEMALE}
                />
            </Flex>
        </Flex>
    )
}

export default NameGender;