import { useContext } from "react"
import { AuthContext } from "../Pages/Context/AuthProvider";


const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;