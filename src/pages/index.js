import AppEntry from 'components/AppEntry';
import { Provider } from 'react-redux';
import { Provider as UrqlProvider } from 'urql';
import store from 'store';
import client from 'utils/urqlClient';

const IndexPage = () => {
  return (
    <UrqlProvider value={client}>
      <Provider store={store}>
        <AppEntry />
      </Provider>
    </UrqlProvider>
  )
};

export default IndexPage