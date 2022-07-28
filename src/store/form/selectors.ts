import { RootState } from '../rootReducer';

export const getFirstName = (state: RootState) => state.forms.firstName;
export const getLastName = (state: RootState) => state.forms.lastName;
export const getSex = (state: RootState) => state.forms.sex;
export const getEmail = (state: RootState) => state.forms.email;
export const getPhoneNumber = (state: RootState) => state.forms.phoneNumber;
export const getAge = (state: RootState) => state.forms.age;
export const getAverage = (state: RootState) => state.forms.average;
export const getAddress = (state: RootState) => state.forms.address;
export const getCity = (state: RootState) => state.forms.city;
export const getState = (state: RootState) => state.forms.state;
export const getZipcode = (state: RootState) => state.forms.zipcode;
export const getUsbcNumber = (state: RootState) => state.forms.usbcNumber;