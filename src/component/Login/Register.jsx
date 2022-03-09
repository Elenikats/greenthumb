import { useRef } from "react";
import { NavLink } from "react-router-dom"

function Register(props) {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    function createUser() {
        const user = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        props.setUsers([...props.users, user])
        nameRef.current.value = ""
        emailRef.current.value = ""
        passwordRef.current.value = ""
    }

    return (
        <div>
            <input ref={nameRef} type="text" placeholder="name" />
            <br />
            <input ref={emailRef} type="email" placeholder="email" />
            <br />
            <input ref={passwordRef} type="password" placeholder="password" />
            <br />
            <button onClick={createUser}>Add new user</button>
        </div>
    )
}

export default Register;