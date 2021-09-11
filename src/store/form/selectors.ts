import { useSelector } from 'react-redux';
import { RootState } from '../rootReducer';

export const getFirstName = useSelector((state: RootState) => state.forms.firstName);
export const getLastName = useSelector((state: RootState) => state.forms.lastName);