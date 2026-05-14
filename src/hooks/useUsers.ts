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

    useEffect(() => {fetchUsers()}, [])

    
}