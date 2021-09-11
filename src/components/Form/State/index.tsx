import { FC, useRef, ReactElement } from 'react';
import { Select } from 'theme-ui';
import { useDispatch } from 'react-redux';
import states from './states';
import constants from '../constants';
import { saveState } from 'store/form/slice';

export interface StateType {
    key: String;
    value: String;
};

const createStatesArray = (): ReactElement[] => {
    const map: ReactElement[] = [];
    
    for(const key in states) {
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
                    value: states[key]
                }

                dispatch(saveState(obj));
            }}
        >
            {statesRef.current}
        </Select>
    )
};

export default State;