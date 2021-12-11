import { createClient } from 'urql';

const client = createClient({
  url: 'http://localhost:4000/graphql',
});

export default client;