import {User} from "./types/user.types"

interface UserCardProp{
    user:User
}

const UserCard:React.FC<UserCardProp>=({user})=>{
return(
    <div>
        <h3>{user.id}. {user.name}</h3>
        <p>{user.email}</p>
    </div>
)
}
export default UserCard