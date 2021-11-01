import { FC, useRef, ReactElement } from 'react';
import { Select } from 'theme-ui';
import { useDispatch } from 'react-redux';
import states, { StatesType } from './states';
import constants from '../constants';
import { saveState } from 'store/form/slice';

export interface StateType {
    key: string;
    value: string;
};

const createStatesArray = (): ReactElement[] => {
    const map: ReactElement[] = [];
    let key: keyof StatesType;

    for(key in states as StatesType) {
        map.push(<option value={key}>{states[key]}</option>);
    };

    return map;
}

const State: FC = () => {
    const statesRef = useRef(createStatesArray());
    const dispatch = useDispatch();

    return (
        <Select
            sx={{
                variant: 'forms.state'
            }}
            name={constants.state}
            onChange={({ target: { value: key }}) => {
                const obj = {
                    key,
                    value: states[key as keyof typeof states]
                }

                dispatch(saveState(obj));
            }}
        >
            {statesRef.current}
        </Select>
    )
};

export default State;