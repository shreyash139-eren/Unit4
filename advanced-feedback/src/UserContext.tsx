import { createContext } from 'react';

export type User = {
  name: string;
  email: string;
  rating:number,
  feedback:string
};

const UserContext = createContext<User[] | null>([]);

export default UserContext;
