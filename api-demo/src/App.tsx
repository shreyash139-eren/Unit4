import UserCard from './UserCard';
import { useEffect, useState } from 'react';
import './App.css';
import { User } from './types/user.types';

const App:React.FC=()=>{
const [users,setUsers] = useState<User[]>([])
const [loading,setLoading]=useState<boolean>(false)

async function fetchData(){
  setLoading(true)
  try {
    let response=await fetch("https://jsonplaceholder.typicode.com/users")
    let result=await response.json()
    setUsers(result)
  } catch (error) {
    console.log(error)
  }finally{
    setLoading(false)
  }
}

useEffect(()=>{
  fetchData()
},[])

  return (
    <div className="App">
      <h1><u>Users</u></h1>
      {loading?<p>Loading...</p>:
      <div>
        {users.map((user)=>(
          <UserCard key={user.id} user={user}/>
        ))}  
      </div>}
    </div>
  );
}

export default App;
