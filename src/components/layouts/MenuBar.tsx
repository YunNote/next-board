import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function MenuBar(){

    const {token} = useSelector((state: RootState) => state.auth);

    return <div>
        { token === '11' ? <div>login</div> : null}
    </div>
}