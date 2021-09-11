import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SEX } from 'components/MyRadio';
import { StateType } from 'components/Form/State';
import { AppThunk } from '../index';

type StateInterface =  {
    firstName: string | null;
    lastName: string | null;
    sex: SEX | null;
    email: string | null;
    phoneNumber: string | null;
    age: number | null;
    address: string | null;
    city: string | null;
    state: StateType | null;
    zipcode: string | null;
    usbcNumber: string | null;
};

const initialState: StateInterface = {
    firstName: null,
    lastName: null,
    sex: null,
    email: null,
    phoneNumber: null,
    age: null,
    address: null,
    city: null,
    state: null,
    zipcode: null,
    usbcNumber: null
};

const formsSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFirstName: (state, action: PayloadAction<{ firstName: string }>) => {
            const { firstName } = action.payload;

            state.firstName = firstName;
        },
        setLastName: (state, action: PayloadAction<{ lastName: string }>) => {
            const { lastName } = action.payload;

            state.lastName = lastName;
        },
        setSex: (state, action: PayloadAction<{ sex: SEX }>) => {
            const { sex } = action.payload;

            state.sex = sex;
        },
        setEmail: (state, action: PayloadAction<{ email: string }>) => {
            const { email } = action.payload;

            state.email = email;
        },
        setPhoneNumber: (state, action: PayloadAction<{ phoneNumber: string }>) => {
            const { phoneNumber } = action.payload;

            state.phoneNumber = phoneNumber;
        },
        setAge: (state, action: PayloadAction<{ age: number }>) => {
            const { age } = action.payload;

            state.age = age;
        },
        setAddress: (state, action: PayloadAction<{ address: string }>) => {
            const { address } = action.payload;

            state.address = address;
        },
        setCity: (state, action: PayloadAction<{ city: string }>) => {
            const { city } = action.payload;

            state.city = city;
        },
        setState: (state, action: PayloadAction<{ stateParam: StateType }>) => {
            const { stateParam } = action.payload;

            state.state = stateParam;
        },
        setZipcode: (state, action: PayloadAction<{ zipcode: string }>) => {
            const { zipcode } = action.payload;

            state.zipcode = zipcode;
        },
        setUSBCNumber: (state, action: PayloadAction<{ usbcNumber: string }>) => {
            const { usbcNumber } = action.payload;

            state.usbcNumber = usbcNumber;
        }
    }
});

export const {
    setFirstName,
    setLastName,
    setSex,
    setEmail,
    setPhoneNumber,
    setAge,
    setAddress,
    setCity,
    setState,
    setZipcode,
    setUSBCNumber
} = formsSlice.actions;

export default formsSlice.reducer;

export const saveFirstName = (firstName: string): AppThunk => (dispatch) => {
    dispatch(setFirstName({ firstName }));
};

export const saveLastName = (lastName: string): AppThunk => (dispatch) => {
    dispatch(setLastName({ lastName }));
};

export const saveSex = (sex: SEX): AppThunk => (dispatch) => {
    dispatch(setSex({ sex }));
};

export const saveEmail = (email: string): AppThunk => (dispatch) => {
    dispatch(setEmail({ email }));
};

export const savePhoneNumber = (phoneNumber: string): AppThunk => (dispatch) => {
    dispatch(setPhoneNumber({ phoneNumber }));
};

export const saveAge = (age: number): AppThunk => (dispatch) => {
    dispatch(setAge({ age }));
};

export const saveAddress = (address: string): AppThunk => (dispatch) => {
    dispatch(setAddress({ address }));
};

export const saveCity = (city: string): AppThunk => (dispatch) => {
    dispatch(setCity({ city }));
};

export const saveState = (state: StateType): AppThunk => (dispatch) => {
    dispatch(setState({ stateParam: state }));
};

export const saveZipcode = (zipcode: string): AppThunk => (dispatch) => {
    dispatch(setZipcode({ zipcode }));
};

export const saveUSBCNumber = (usbcNumber: string): AppThunk => (dispatch) => {
    dispatch(setUSBCNumber({ usbcNumber }));
};