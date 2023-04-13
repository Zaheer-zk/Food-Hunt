import { createContext } from 'react';

const UserContext = createContext({
  user: {
    name: 'DummyName',
    email: 'dummyemail@gmail.com',
  },
});

export default UserContext;
