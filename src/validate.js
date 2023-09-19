import { useDispatch } from "react-redux";
import { signIn, signOut } from "./redux/actions/signInActions";
import { setUser, setAdmin } from "./redux/actions/setUserActions";

function useValidate() {

    const dispatch = useDispatch();

    async function Validate() {
    
        const response = await fetch('http://localhost:3002/validate', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({token: localStorage.getItem('authToken')})
        });
    
        const data = await response.json();
        if(data.isValid) {
            dispatch(signIn());
            data.role === 'admin' ? dispatch(setAdmin()) : dispatch(setUser());
        } else {
            dispatch(signOut());
        }
    }

    return Validate;
    
}

export default useValidate;