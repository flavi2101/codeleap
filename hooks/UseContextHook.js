import { useContext } from "react";
import { UserContext } from "../context/context";

export default function ContextHook(){
    const context = useContext(UserContext)

    if(!context){
        console.log('elemento fora do contexto ')
    }
    return context
}