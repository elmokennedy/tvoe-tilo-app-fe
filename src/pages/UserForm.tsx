import { useState } from "react"
import { User } from "../types/user";
import { useForm } from "react-hook-form";

interface Props {
    onSubmit: (user: User) => Promise<any>
}

export const UserForm = ({
    onSubmit
}: Props) => {

    const [errors, setErrors] = useState({});
    const [isSubmitting , setIsSubmitting ] = useState(false);

    const { 
        register, 
        handleSubmit, 
        setError, 
        formState: { errors, isSubmitting } 
    } = useForm({ 
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: ""
        }
    });

    const onSubmitNew = async (values : User) => {
        var response = await onSubmit(values);

        if (!response.ok) {
            const data = await response.json();
        }
    }

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmitOLD = async(
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