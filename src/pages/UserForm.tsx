interface Props {
    onSubmit: (user: { firstName: string, lastName: string, email: string}) => Promise<void>
}

export const UserForm = ({
    onSubmit,
}: Props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    return(
        <form onSubmit={onSubmit}>
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

        </form>
    )
}