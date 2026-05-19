import { User } from "../types/user";

interface Props {
    users: User[];
    onEdit: (user: User) => void;
    onDelete: (id: number) => void;
};

export const UserList = ({
    users,
    onEdit,
    onDelete,
}: Props) => {
    return (
        <div className="user-list">
            {users.map(user => (
                <div key={user.userId}>
                    <span>{user.userId}</span>
                    <span>{user.firstName}</span>
                    <span>{user.lastName}</span>
                    <span>{user.email}</span>
                    <span>{user.phoneNumber}</span>

                    <button onClick={() => onEdit(user)}>Edit</button>

                    <button onClick={() => onDelete(user.userId)}>Delete</button>
                </div>
            ))}
        </div>
    )
} 