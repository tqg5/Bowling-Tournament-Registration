import  constants, { KEYS } from '../constants';

interface UseFormErrorProps {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    age?: string;
    address?: string;
    city?: string;
    zipcode?: string;
    usbcNumber?: string;
}

export type Payload = {
    isValid: boolean;
    message: string | null;
}

const validateEmpty = (val: string | undefined) => {
    return !val;
}

const validateFirstName = (val: string | undefined): Payload => {
    if(validateEmpty(val)) {
        return {
            isValid: false,
            message: constants.messages.firstName[KEYS.EMPTY]
        }
    }

    return {
        isValid: true,
        message: null
    };
}

const validateLastName = (val: string | undefined): Payload => {
    if(validateEmpty(val)) {
        return {
            isValid: false,
            message: constants.messages.lastName[KEYS.EMPTY]
        }
    }

    return {
        isValid: true,
        message: null
    };
}

const validateEmail = (val: string | undefined): Payload => {
    if(validateEmpty(val)) {
        return {
            isValid: false,
            message: constants.messages.email[KEYS.EMPTY]
        }
    }

    return {
        isValid: true,
        message: null
    };
}

const validatePhoneNumber = (val: string | undefined): Payload => {
    if(validateEmpty(val)) {
        return {
            isValid: false,
            message: constants.messages.phoneNumber[KEYS.EMPTY]
        }
    }

    return {
        isValid: true,
        message: null
    };
}

const validateAge = (val: string | undefined): Payload => {
    if(validateEmpty(val)) {
        return {
            isValid: false,
            message: constants.messages.age[KEYS.EMPTY]
        }
    }

    return {
        isValid: true,
        message: null
    };
}

const validateAddress = (val: string | undefined): Payload => {
    if(validateEmpty(val)) {
        return {
            isValid: false,
            message: constants.messages.address[KEYS.EMPTY]
        }
    }

    return {
        isValid: true,
        message: null
    };
}

const validateCity = (val: string | undefined): Payload => {
    if(validateEmpty(val)) {
        return {
            isValid: false,
            message: constants.messages.city[KEYS.EMPTY]
        }
    }

    return {
        isValid: true,
        message: null
    };
}

const validateZipcode = (val: string | undefined): Payload => {
    if(validateEmpty(val)) {
        return {
            isValid: false,
            message: constants.messages.zipcode[KEYS.EMPTY]
        }
    }

    return {
        isValid: true,
        message: null
    };
}

const validateUSBCNumber = (val: string | undefined): Payload => {
    if(validateEmpty(val)) {
        return {
            isValid: false,
            message: constants.messages.usbcNumber[KEYS.EMPTY]
        }
    }

    return {
        isValid: true,
        message: null
    };
}

const useFormError = ({
    firstName,
    lastName,
    email,
    phoneNumber,
    age,
    address,
    city,
    zipcode,
    usbcNumber
}: UseFormErrorProps) => {
    return {
        firstNameErrorPayload: validateFirstName(firstName),
        lastNameErrorPayload: validateLastName(lastName),
        emailErrorPayload: validateEmail(email),
        phoneNumberErrorPayload: validatePhoneNumber(phoneNumber),
        ageErrorPayload: validateAge(age),
        addressErrorPayload: validateAddress(address),
        cityErrorPayload: validateCity(city),
        zipcodeErrorPayload: validateZipcode(zipcode),
        usbcNumberErrorPayload: validateUSBCNumber(usbcNumber)
    }
}

export default useFormError;