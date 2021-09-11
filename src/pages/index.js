import AppEntry from 'components/AppEntry';
import { Provider } from 'react-redux';
import store from 'store';

const IndexPage = () => {
  return (
    <Provider store={store}>
      <AppEntry />
    </Provider>
  )
};

export default IndexPage