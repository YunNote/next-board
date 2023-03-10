import type { NextPage } from "next"
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useAppDispatch } from "@/store";

const LoginForm: NextPage = () => {
    const dispatch = useAppDispatch();

    const {token} = useSelector((state: RootState) => state.auth);

    return (
        <>
            <p>Login</p>
            <p>token : {token}</p>
        </>
    )
}

export default LoginForm;