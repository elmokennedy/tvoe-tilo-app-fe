import { useUsers } from "../hooks/useUsers"
import { UserList } from "./UserList";


export const UsersPage = () => {
    const {
        users,
        loading,
        addUser,
        editUser,
        removeUser
    } = useUsers();

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Users</h1>

            <UserForm onSubmit={addUser} />

            <UserList
                users={users}
                onEdit={editUser}
                onDelete={removeUser}
            />
        </div>
    )
}