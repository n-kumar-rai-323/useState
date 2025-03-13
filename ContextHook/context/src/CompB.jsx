import { useUserContextHook } from "./context/User";
const CompB = () => {
    const { user, setUser, changeEmail } = useUserContextHook();
    return (

        <>
            <span style={{ border: "1px solid red" }}>
                <div>Component B</div>
                {user?.name}
                <br />
                {user?.email}
                <br />
                <input placeholder="Change the email name" onChange={(e) => setUser((prev) => {
                    return { ...prev, name: e.target.value }
                })} />
                <button onClick={changeEmail}>Email</button>
            </span>
        </>
    )
}

export default CompB;