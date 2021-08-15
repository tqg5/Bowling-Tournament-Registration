import { Box } from 'theme-ui';
import Row from './Row';
import MyInput from 'components/MyInput';

const Form = () => (
    <Box p={2}>
        <Row>
            <MyInput placeholder='First Name' />
        </Row>
    </Box>
);

export default Form;