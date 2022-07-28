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
    average: number | null;
    address: string | null;
    city: string | null;
    state: StateType | null;
    zipcode: string | null;
    usbcNumber: string | null;
};

const initialState: StateInterface = {
    firstName: null,
    lastName: null,
    sex: SEX.MALE,
    email: null,
    phoneNumber: null,
    age: null,
    average: null,
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
        setFirstName: (state, action: PayloadAction<{ firstName: string | null }>) => {
            const { firstName } = action.payload;

            state.firstName = firstName;
        },
        setLastName: (state, action: PayloadAction<{ lastName: string | null }>) => {
            const { lastName } = action.payload;

            state.lastName = lastName;
        },
        setSex: (state, action: PayloadAction<{ sex: SEX }>) => {
            const { sex } = action.payload;

            state.sex = sex;
        },
        setEmail: (state, action: PayloadAction<{ email: string | null }>) => {
            const { email } = action.payload;

            state.email = email;
        },
        setPhoneNumber: (state, action: PayloadAction<{ phoneNumber: string | null }>) => {
            const { phoneNumber } = action.payload;

            state.phoneNumber = phoneNumber;
        },
        setAge: (state, action: PayloadAction<{ age: number | null }>) => {
            const { age } = action.payload;

            state.age = age;
        },
        setAverage: (state, action: PayloadAction<{ average: number | null }>) => {
            const { average } = action.payload;

            state.average = average;
        },
        setAddress: (state, action: PayloadAction<{ address: string | null }>) => {
            const { address } = action.payload;

            state.address = address;
        },
        setCity: (state, action: PayloadAction<{ city: string | null }>) => {
            const { city } = action.payload;

            state.city = city;
        },
        setState: (state, action: PayloadAction<{ stateParam: StateType | null }>) => {
            const { stateParam } = action.payload;

            state.state = stateParam;
        },
        setZipcode: (state, action: PayloadAction<{ zipcode: string | null }>) => {
            const { zipcode } = action.payload;

            state.zipcode = zipcode;
        },
        setUSBCNumber: (state, action: PayloadAction<{ usbcNumber: string | null }>) => {
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
    setAverage,
    setAddress,
    setCity,
    setState,
    setZipcode,
    setUSBCNumber
} = formsSlice.actions;

export default formsSlice.reducer;

export const saveFirstName = (firstName: string | null): AppThunk => (dispatch) => {
    dispatch(setFirstName({ firstName }));
};

export const saveLastName = (lastName: string | null): AppThunk => (dispatch) => {
    dispatch(setLastName({ lastName }));
};

export const saveSex = (sex: SEX): AppThunk => (dispatch) => {
    dispatch(setSex({ sex }));
};

export const saveEmail = (email: string | null): AppThunk => (dispatch) => {
    dispatch(setEmail({ email }));
};

export const savePhoneNumber = (phoneNumber: string | null): AppThunk => (dispatch) => {
    dispatch(setPhoneNumber({ phoneNumber }));
};

export const saveAge = (age: number | null): AppThunk => (dispatch) => {
    dispatch(setAge({ age }));
};

export const saveAverage = (average: number | null): AppThunk => (dispatch) => {
    dispatch(setAverage({ average }));
};

export const saveAddress = (address: string | null): AppThunk => (dispatch) => {
    dispatch(setAddress({ address }));
};

export const saveCity = (city: string | null): AppThunk => (dispatch) => {
    dispatch(setCity({ city }));
};

export const saveState = (state: StateType | null): AppThunk => (dispatch) => {
    dispatch(setState({ stateParam: state }));
};

export const saveZipcode = (zipcode: string | null): AppThunk => (dispatch) => {
    dispatch(setZipcode({ zipcode }));
};

export const saveUSBCNumber = (usbcNumber: string | null): AppThunk => (dispatch) => {
    dispatch(setUSBCNumber({ usbcNumber }));
};