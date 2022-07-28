export enum KEYS {
    EMPTY,
    MALFORMED
}
export default {
    labels: {
        firstName: 'firstName',
        lastName: 'lastName',
        sex: 'sex',
        email: 'email',
        phoneNumber: 'phoneNumber',
        age: 'age',
        average: 'average',
        address: 'address',
        city: 'city',
        state: 'state',
        zipcode: 'zipcode',
        usbcNumber: 'usbcNumber'
    },
    messages: {
        firstName: {
            [KEYS.EMPTY]: `First name can't be empty`
        },
        lastName: {
            [KEYS.EMPTY]: `Last name can't be empty`
        },
        email: {
            [KEYS.EMPTY]: `Email can't be empty`
        },
        phoneNumber: {
            [KEYS.EMPTY]: `Phone number can't be empty`
        },
        age: {
            [KEYS.EMPTY]: `Age can't be empty`
        },
        average: {
            [KEYS.EMPTY]: `Average can't be empty`
        },
        address: {
            [KEYS.EMPTY]: `Address can't be empty`
        },
        city: {
            [KEYS.EMPTY]: `City can't be empty`
        },
        zipcode: {
            [KEYS.EMPTY]: `Zipcode can't be empty`
        },
        usbcNumber: {
            [KEYS.EMPTY]: `USBC # can't be empty`
        }
    }
};