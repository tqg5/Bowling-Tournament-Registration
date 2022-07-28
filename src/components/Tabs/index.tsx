import { Fragment, useState, useEffect } from 'react';
import Form from 'components/Form';
import UserList from 'components/UserList';

const Tabs = () => {
    const [ didCreateUser, setDidCreateUser ] = useState<boolean>(false);

    useEffect(() => {
        if(didCreateUser) {
            setDidCreateUser(false);
        }
    }, [ didCreateUser ]);

    return (
        <Fragment>
            <Form setDidCreateUser={setDidCreateUser} />
            <UserList refreshList={didCreateUser} />
        </Fragment>
    );
};

export default Tabs;