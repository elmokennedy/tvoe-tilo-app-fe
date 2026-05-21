import { User } from "../types/user";
import { UserItem } from "./UserItem";

interface Props {
    users: User[];
    onEdit: (user: User) => Promise<void>;
    onDelete: (id: number) => Promise<void>;
};

export const UserList = ({
    users,
    onEdit,
    onDelete,
}: Props) => {
    return (
        <div className="user-list">
            {users.map(user => (
                <UserItem
                    key={user.userId}
                    user={user}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
} 