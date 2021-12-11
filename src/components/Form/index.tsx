import { useRef } from 'react';
import {
    Box,
    ThemeProvider,
    Flex,
    Button
} from 'theme-ui';
import { useQuery } from 'urql';
import Row from './Row';
import NameGender from './NameGender';
import Email from './Email';
import theme from './theme';
import PhoneNumber from './PhoneNumber';
import Age from './Age';
import Address from './Address';
import City from './City';
import State from './State';
import Zipcode from './Zipcode';
import USBCNumber from './USBCNumber';

const TodosQuery = `
query {
    users {
      id
      lastName
    }
  }
`;

const Form = () => {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const maleRef = useRef(null);
    const femaleRef = useRef(null);
    const emailRef = useRef(null);
    const [result, reexecuteQuery] = useQuery({
        query: TodosQuery,
    });

    const { data, fetching, error } = result;

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;
    
    console.log('data', data)
    console.log('fetching', fetching)
    console.log('error', error)
    return (
        <ThemeProvider theme={theme}>
            <Box
                variant='formWrapper'
                as='form'
                onSubmit={(e) => {
                    e.preventDefault();
                    const c = firstNameRef.current;
debugger
                    
                }}
            >
                <Box>
                    <Row>
                        <NameGender
                            firstNameRef={firstNameRef}
                            lastNameRef={lastNameRef}
                            maleRef={maleRef}
                            femaleRef={femaleRef}
                        />
                    </Row>
                    <Row>
                        <Flex>
                            <Email ref={emailRef} />
                            <PhoneNumber />
                            <Age />
                        </Flex>
                    </Row>
                    <Row>
                        <Address />
                    </Row>
                    <Row>
                        <Flex>
                            <City />
                            <State />
                            <Zipcode />
                        </Flex>
                    </Row>
                    <Row>
                        <USBCNumber />
                    </Row>
                </Box>
                <Button>Submit</Button>
            </Box>
        </ThemeProvider>
    );
};

export default Form;