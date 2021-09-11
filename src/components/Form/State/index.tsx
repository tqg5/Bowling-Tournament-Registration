import { FC, useRef, ReactElement } from 'react';
import { Select } from 'theme-ui';
import { useDispatch } from 'react-redux';
import * as states from './states.json';
import constants from '../constants';
import { saveState } from 'store/form/slice';

export interface StateType {
    key: string;
    value: string;
};

type statesSchema = typeof import('./states.json');

const createStatesArray = (): ReactElement[] => {
    const map: ReactElement[] = [];

    let key: keyof typeof states;
    for(key in states as statesSchema) {
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