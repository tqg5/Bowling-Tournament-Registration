const theme = {
    buttons: {
        primary: {
            color: 'blue',
            backgroundColor: 'white'
        }
    },
    forms: {
        input: {
            backgroundColor: 'green',
            "&::placeholder": {
                color: 'white'
            },
            error: {
                backgroundColor: 'red'
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
        average: {
            flex: 1.2
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
    },
    text: {
        status: {
            color: 'green'
        }
    }
}

export default theme;