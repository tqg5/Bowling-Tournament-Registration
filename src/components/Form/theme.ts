const theme = {
    forms: {
        input: {
            backgroundColor: 'green',
            "&::placeholder": {
                color: 'white'
            }
        },
        select: {
            backgroundColor: 'green',
            color: 'white'
        },
        label: {
            flex: 1,
            alignItems: 'center',
            color: 'white',
            cursor: 'pointer'
        },
        firstName: {
            flex: 8
        },
        lastName: {
            flex: 8
        },
        email: {
            flex: 5
        },
        phoneNumber: {
            flex: 4
        },
        age: {
            flex: 1
        },
        city: {
            flex: 5
        },
        state: {
            flex: 1
        },
        zipCode: {
            flex: 3
        },
        USBCNumber: {
            flex: 1
        }
    },
    formWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    nameGenderWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default theme;