import { useState } from "react"
import { User } from "../types/user";

interface Props {
    onSubmit: (user: User) => Promise<void>
}

export const UserForm = ({
    onSubmit
}: Props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = async(
        e: React.FormEvent
    ) => {
        e.preventDefault();

        const user: User = {
            userId: 0,
            firstName,
            lastName,
            email,
            phoneNumber
        };

        await onSubmit(user);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    placeholder="First name"
                    onChange = {(e) => setFirstName(e.target.value)}
                />
            </div>

            <div>
                <input
                    placeholder="Last name"
                    onChange = {(e) => setLastName(e.target.value)}
                />
            </div>

            <div>
                <input
                    placeholder="Email"
                    onChange = {(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <input
                    placeholder="Phone number"
                    onChange = {(e) => setPhoneNumber(e.target.value)}
                />
            </div>

            <button type="submit">
                Add user
            </button>

        </form>
    )
}