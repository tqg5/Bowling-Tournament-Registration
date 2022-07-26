import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    Box,
    ThemeProvider,
    Flex,
    Button,
    Text,
    Message
} from 'theme-ui';
import { useMutation } from 'urql';
import { ThemeUIJSX } from '@theme-ui/core'
import {
    getFirstName,
    getLastName,
    getSex,
    getEmail,
    getPhoneNumber,
    getAge,
    getAddress,
    getCity,
    getState,
    getZipcode,
    getUsbcNumber
} from 'store/form/selectors';
import Row from './Row';
import NameGender from './NameGender';
import Email from './Email';
import theme from './theme';
import PhoneNumber from './PhoneNumber';
import Age from './Age';
import Address from './Address';
import City from './City';
import State from './State';
import Zipcode from './Zipcode';
import USBCNumber from './USBCNumber';
import {
    saveFirstName,
    saveLastName,
    saveSex,
    saveEmail,
    savePhoneNumber,
    saveAge,
    saveAddress,
    saveCity,
    saveState,
    saveZipcode,
    saveUSBCNumber
} from 'store/form/slice';
import { SEX } from 'components/MyRadio';
import useFormError from './hooks/useFormError';

const CreateUserMut = `
    mutation (
        $firstName: String!,
        $lastName: String!,
        $sex: Sex!,
        $email: String!,
        $phoneNumber: String!,
        $age: Int!,
        $address: String!,
        $city: String!,
        $state: State!,
        $zipcode: String!,
        $usbcNumber: String!
    ) {
    createUser(
      firstName: $firstName,
      lastName: $lastName,
      sex: $sex,
      email: $email,
      phoneNumber: $phoneNumber,
      age: $age,
      address: $address,
      city: $city,
      state: $state,
      zipcode: $zipcode,
      usbcNumber: $usbcNumber
    ) {
      id,
      firstName
    }
  }
`;

const addMessage = (msg: string | null) => msg ? <div>{msg}</div> : null

const Form = () => {
    const firstNameRef = useRef<HTMLInputElement | null>(null);
    const lastNameRef = useRef<HTMLInputElement | null>(null);
    const maleRef = useRef<HTMLInputElement | null>(null);
    const femaleRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const phoneNumberRef = useRef<HTMLInputElement | null>(null);
    const ageRef = useRef<HTMLInputElement | null>(null);
    const addressRef = useRef<HTMLInputElement | null>(null);
    const cityRef = useRef<HTMLInputElement | null>(null);
    const stateRef = useRef<HTMLSelectElement | null>(null);
    const zipcodeRef = useRef<HTMLInputElement | null>(null);
    const usbcNumberRef = useRef<HTMLInputElement | null>(null);

    const firstName = useSelector(getFirstName);
    const lastName = useSelector(getLastName);
    const sex = useSelector(getSex);
    const email = useSelector(getEmail);
    const phoneNumber = useSelector(getPhoneNumber);
    const age = useSelector(getAge);
    const address = useSelector(getAddress);
    const city = useSelector(getCity);
    const state = useSelector(getState);
    const zipcode = useSelector(getZipcode);
    const usbcNumber = useSelector(getUsbcNumber);

    const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

    const {
        firstNameErrorPayload,
        lastNameErrorPayload,
        emailErrorPayload,
        phoneNumberErrorPayload,
        ageErrorPayload,
        addressErrorPayload,
        cityErrorPayload,
        zipcodeErrorPayload,
        usbcNumberErrorPayload
    } = useFormError({
        firstName: firstNameRef.current?.value,
        lastName: lastNameRef.current?.value,
        email: emailRef.current?.value,
        phoneNumber: phoneNumberRef.current?.value,
        age: ageRef.current?.value,
        address: addressRef.current?.value,
        city: cityRef.current?.value,
        zipcode: zipcodeRef.current?.value,
        usbcNumber: usbcNumberRef.current?.value
    });
    const [statusMessage, setStatusMessage] = useState<(ThemeUIJSX.Element | null)[]>([]);
    const [hasErrorMessage, setHasErrorMessage] = useState<boolean>(false);
    const [createUserResult, createUser] = useMutation(CreateUserMut);

    const { data, fetching, error } = createUserResult;

    //if (fetching) return <p>Loading...</p>;
    //if (error) return <p>Oh no... {error.message}</p>;

    useEffect(() => {
        if(!hasSubmitted) return;

        let message = [
            addMessage(firstNameErrorPayload.message),
            addMessage(lastNameErrorPayload.message),
            addMessage(emailErrorPayload.message),
            addMessage(phoneNumberErrorPayload.message),
            addMessage(ageErrorPayload.message),
            addMessage(addressErrorPayload.message),
            addMessage(cityErrorPayload.message),
            addMessage(zipcodeErrorPayload.message),
            addMessage(usbcNumberErrorPayload.message)
        ]

        if(message) {
            setStatusMessage(message)
        }

        if(message.every(msg => !msg)) {
            const obj = {
                firstName,
                lastName,
                sex: sex?.toUpperCase(),
                email,
                phoneNumber,
                age,
                address,
                city,
                state: state?.key,
                zipcode,
                usbcNumber
            }

            createUser(obj).then(result => {
                if(result.error) {
                    return;
                }

                if(firstNameRef.current) {
                    firstNameRef.current.value = '';
                }

                if(lastNameRef.current) {
                    lastNameRef.current.value = '';
                }

                if(maleRef.current) {
                    maleRef.current.checked = true;
                }

                if(femaleRef.current) {
                    femaleRef.current.checked = false;
                }

                if(emailRef.current) {
                    emailRef.current.value = '';
                }

                if(phoneNumberRef.current) {
                    phoneNumberRef.current.value = '';
                }

                if(ageRef.current) {
                    ageRef.current.value = '';
                }

                if(addressRef.current) {
                    addressRef.current.value = '';
                }

                if(cityRef.current) {
                    cityRef.current.value = '';
                }

                if(stateRef.current) {
                    stateRef.current.value = '';
                }

                if(zipcodeRef.current) {
                    zipcodeRef.current.value = '';
                }

                if(usbcNumberRef.current) {
                    usbcNumberRef.current.value = '';
                }

                saveFirstName(null);
                saveLastName(null);
                saveSex(SEX.MALE);
                saveEmail(null);
                savePhoneNumber(null);
                saveAge(null);
                saveAddress(null);
                saveCity(null);
                saveState(null);
                saveZipcode(null);
                saveUSBCNumber(null);

                setStatusMessage([<div>Entry saved successfully!</div>]);
            }).catch(e => {
                console.error(e);
            })
        }

        setHasSubmitted(false);
    }, [
        hasSubmitted,
        firstNameErrorPayload.message,
        lastNameErrorPayload.message,
        emailErrorPayload.message,
        phoneNumberErrorPayload.message,
        ageErrorPayload.message,
        addressErrorPayload.message,
        cityErrorPayload.message,
        zipcodeErrorPayload.message,
        usbcNumberErrorPayload.message
    ]);

    return (
        <ThemeProvider theme={theme}>
            <Box
                variant='formWrapper'
                as='form'
                onSubmit={(e) => {
                    e.preventDefault();

                    setHasSubmitted(true);
                    
                    
                }}
            >
                <Box>
                    {
                        statusMessage && (
                            <Text variant='text.status'>{statusMessage}</Text>
                        )
                    }
                    <Row>
                        <NameGender
                            firstNameRef={firstNameRef}
                            firstNameErrorPayload={firstNameErrorPayload}
                            lastNameRef={lastNameRef}
                            lastNameErrorPayload={lastNameErrorPayload}
                            maleRef={maleRef}
                            femaleRef={femaleRef}
                        />
                    </Row>
                    <Row>
                        <Flex>
                            <Email forwardedRef={emailRef} payload={emailErrorPayload} />
                            <PhoneNumber forwardedRef={phoneNumberRef} payload={phoneNumberErrorPayload} />
                            <Age forwardedRef={ageRef} payload={ageErrorPayload} />
                        </Flex>
                    </Row>
                    <Row>
                        <Address forwardedRef={addressRef} payload={addressErrorPayload} />
                    </Row>
                    <Row>
                        <Flex>
                            <City forwardedRef={cityRef} payload={cityErrorPayload} />
                            <State forwardedRef={stateRef} />
                            <Zipcode forwardedRef={zipcodeRef} payload={zipcodeErrorPayload} />
                        </Flex>
                    </Row>
                    <Row>
                        <USBCNumber forwardedRef={usbcNumberRef} payload={usbcNumberErrorPayload} />
                    </Row>
                </Box>
                <Button>Submit</Button>
            </Box>
        </ThemeProvider>
    );
};

export default Form;