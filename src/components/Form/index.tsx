import {
    Box,
    ThemeProvider,
    Flex,
    Button
} from 'theme-ui';
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

const Form = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                variant='formWrapper'
                as='form'
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <Box>
                    <Row>
                        <NameGender />
                    </Row>
                    <Row>
                        <Flex>
                            <Email />
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