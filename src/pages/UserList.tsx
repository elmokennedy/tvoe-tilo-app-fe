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
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <span>{user.firstName}</span>

                    <button onClick={() => onEdit(user)}>Edit</button>

                    <button onClick={() => onDelete(user.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
} 