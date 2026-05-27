import { useState } from "react"
import { User } from "../types/user";
import { useForm } from "react-hook-form";

interface Props {
    onSubmit: (user: User) => Promise<any>
}

export const UserForm = ({
    onSubmit
}: Props) => {

    const { 
        register, 
        handleSubmit, 
        setError, 
        formState: { errors } 
    } = useForm({ 
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: ""
        }
    });

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const onSubmitInner = async (values) => {
        const newUser: User = {
            userId: 0,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber
        };

        var response = await onSubmit(newUser);

        if (!response.ok) {
            const data = await response.json();

            console.log(data);

            if (data.field) {
                setError(data.field, { message: data.message });
            }
        } else{
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhoneNumber("");
        }
    }

    return(
        <form onSubmit={handleSubmit(onSubmitInner)}>
            <div>
                <input
                    placeholder="First name"
                    {...register("firstName", {
                        required: "First name is required"
                    })}
                    onChange = {(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && (
                    <p>{errors.firstName.message}</p>
                )}
            </div>

            <div>
                <input
                    placeholder="Last name"
                    {...register("lastName", {
                        required: "Last name is required"
                    })}
                    onChange = {(e) => setLastName(e.target.value)}
                />
                {errors.lastName && (
                    <p>{errors.lastName.message}</p>
                )}
            </div>

            <div>
                <input
                    placeholder="Email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address"
                        }
                    })}
                    onChange = {(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                    <p>{errors.email.message}</p>
                )}
            </div>

            <div>
                <input
                    placeholder="Phone number"
                    {...register("phoneNumber", {
                        required: "Phone number is required"
                    })}
                    onChange = {(e) => setPhoneNumber(e.target.value)}
                />
                {errors.phoneNumber && (
                    <p>{errors.phoneNumber.message}</p>
                )}
            </div>
            
            <button type="submit">
                Add user
            </button>

        </form>
    )
}