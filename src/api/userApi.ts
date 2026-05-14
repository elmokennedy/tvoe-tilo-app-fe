import axios from "axios";
import { User } from "../types/user";

const API_URL = "https://localhost:7175/api/users";

export const getUsers = async (): Promise<User[]> => {
    const response = await axios.get(API_URL);
    return response.data;
}

export const createUser = async (user: User) => {
    const response = await axios.post(API_URL, user);
    return response.data;
}

export const updateUser = async (user: User) => {
    const response = await axios.put(`${API_URL}/${user.id}`, user);
    return response.data;
}

export const deleteUser = async (id: number) => {
    await axios.delete(`{API_URL}/${id}`)
}