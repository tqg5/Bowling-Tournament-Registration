import { Flex } from 'theme-ui';
import MyInput from 'components/MyInput';
import MyRadio, { SEX } from 'components/MyRadio';
import constants from './constants';
import { useDispatch } from 'react-redux';
import {
    saveFirstName,
    saveLastName,
    saveSex
} from 'store/form/slice';
import { Payload } from './hooks/useFormError';

interface NameGenderProps {
    firstNameRef: React.ForwardedRef<HTMLInputElement>,
    firstNameErrorPayload: Payload;
    lastNameRef: React.ForwardedRef<HTMLInputElement>,
    lastNameErrorPayload: Payload
    maleRef: React.ForwardedRef<HTMLInputElement>,
    femaleRef: React.ForwardedRef<HTMLInputElement>
};

const NameGender = ({
    firstNameRef,
    firstNameErrorPayload,
    lastNameRef,
    lastNameErrorPayload,
    maleRef,
    femaleRef
}: NameGenderProps) => {
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
                forwardedRef={firstNameRef}
                name={constants.labels.firstName}
                placeholder='First Name'
                onChange={({ target: { value }}) => {
                    dispatch(saveFirstName(value));
                }}
                hasError={!firstNameErrorPayload.isValid}
            />
            <MyInput
                sx={{
                    variant: 'forms.lastName'
                }}
                forwardedRef={lastNameRef}
                name={constants.labels.lastName}
                placeholder='Last Name'
                onChange={({ target: { value }}) => {
                    dispatch(saveLastName(value));
                }}
                hasError={!lastNameErrorPayload.isValid}
            />
            <Flex>
                <MyRadio
                    forwardedRef={maleRef}
                    label={SEX.MALE}
                    name={constants.labels.sex}
                    value={SEX.MALE}
                    defaultChecked={true}
                    onChange={({ target: { value }}) => {
                            dispatch(saveSex(value as SEX));
                    }}
                />
                <MyRadio
                    forwardedRef={femaleRef}
                    label={SEX.FEMALE}
                    name={constants.labels.sex}
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