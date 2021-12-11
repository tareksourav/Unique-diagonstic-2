import { useContext } from "react"
import { AuthCotext } from "../../context/AuthProvider"

const useAuth = () => {
    return useContext(AuthCotext);
}
export default useAuth;