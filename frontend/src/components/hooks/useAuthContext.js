import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext=()=>{
    const context=useContext(AuthContext);
    if(!context){
        throw Error("theres a error in getting context")
    }
    return context;
}