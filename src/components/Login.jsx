import React, { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login as LoginAction } from "../redux/actions/AuthAction";
import { selectUser } from "../redux/reducers/AuthReducer";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const user = useSelector(selectUser)

    useEffect(() => {
        console.log(user)
    }, [user])

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(LoginAction({
            email: email,
            password: password,
            logged: true,
        }))
    }

    return (
        <Fragment>
            <form action="">
                <h1>Đăng nhập</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>
                    Đăng nhập
                </button>
            </form>
        </Fragment>
    );
}

export default Login;
