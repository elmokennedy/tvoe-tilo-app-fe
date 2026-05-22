import { useEffect, useState } from "react";
import { User } from "../types/user";
import * as api from "../api/userApi";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading]= useState(false);

    const fetchUsers = async () => {
        setLoading(true);

        try{
            const data = await api.getUsers()
            setUsers(data);
        } finally{
            setLoading(false);
        }
    };

    useEffect(() => {fetchUsers()}, []);

    const addUser = async (user: User) : Promise <any> => {
        var response = await api.createUser(user);

        if (!response.ok) {
            const data = await response.json();
            return data;
        }

        await fetchUsers();
    }

    const editUser = async (user: User) => {
        await api.updateUser(user);

        await fetchUsers();
    }

    const removeUser = async (id: number) => {
        await api.deleteUser(id);

        await fetchUsers();
    }

    return {
        users,
        loading,
        addUser,
        editUser,
        removeUser
    }
}