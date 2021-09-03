import { FC, useRef, ReactElement } from 'react';
import { Select } from 'theme-ui';
import states from './states';
import constants from '../constants';

const createStatesArray = (): ReactElement[] => {
    const map: ReactElement[] = [];
    
    for(const key in states) {
        map.push(<option value={key}>{states[key]}</option>);
    };

    return map;
}

const State: FC = () => {
    const statesRef = useRef(createStatesArray());

    return (
        <Select
            sx={{
                variant: 'forms.state'
            }}
            name={constants.state}
        >
            {statesRef.current}
        </Select>
    )
};

export default State;