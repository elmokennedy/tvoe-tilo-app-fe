import { useState } from "react";
import { User } from "../types/user";

interface Props {
    user: User;
    onEdit: (user: User) => Promise<void>;
    onDelete: (id: number) => Promise<void>;
};

export const UserItem = ({user, onEdit, onDelete}: Props) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = async(
        e: React.FormEvent
    ) => {
        e.preventDefault();

        const editUser: User = {
            userId: user.userId,
            firstName,
            lastName,
            email,
            phoneNumber
        };

        await onEdit(editUser);

        setIsEditing(false);
    }

    const handleDelete = async() => {
        const confirmed = window.confirm("Are you sure you want to delete this user?");

        if (confirmed) {
            await onDelete(user.userId);
        }
    }

    return (
        <>
            {isEditing ? (
                <form onSubmit={handleEdit}>
                    <div>
                        <input type="hidden" value={user.userId} />
                        <span>{user.userId}</span>
                        <span>
                            <input
                                defaultValue={user.firstName}
                                placeholder="First name"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </span>
                        <span>
                            <input
                                defaultValue={user.lastName}
                                placeholder="Last name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </span>
                        <span>
                            <input
                                defaultValue={user.email}
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </span>
                        <span>
                            <input
                                defaultValue={user.phoneNumber}
                                placeholder="Phone number"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </span>

                        <button type="submit">Save</button>
                        <button onClick={() => setIsEditing(!isEditing)}>Cancel</button>
                        <button onClick={() => handleDelete()}>Delete</button>
                    </div>
                </form>
            ) : (
                <div key={user.userId}>
                    <span>{user.userId}</span>
                    <span>{user.firstName}</span>
                    <span>{user.lastName}</span>
                    <span>{user.email}</span>
                    <span>{user.phoneNumber}</span>

                    <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
                    <button onClick={() => handleDelete()}>Delete</button>
                </div>
            )}
        </>
    )
}