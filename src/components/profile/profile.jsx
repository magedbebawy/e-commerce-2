import { useDispatch } from "react-redux";
import { signOut } from "../../redux/actions/signInActions";

function Profile() {

    const dispatch = useDispatch();

    const handleLogOut = async (e) => {
        e.preventDefault();
        localStorage.removeItem('authToken');
        dispatch(signOut());
    }
    return(
        <div className="profilecontainer">
            <h1>Profile</h1>
            <button onClick={handleLogOut}>Log out</button>
        </div>
    )
}

export default Profile;