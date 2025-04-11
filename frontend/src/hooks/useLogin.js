import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/Authcontext';

const useLogin = () => {
    const [loading,setLoading]  = useState(false);
    const {setUser} =  useAuth()

    const login = async (Username,Password)=>{

        const success = handleInpErrors(Username, Password);
        if(!success) return;

        setLoading(true);

        const loadingToast = toast.loading("Signing in...");

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({Username,Password})
            })

            const data = await res.json();

            if(data.error){
                throw new Error(data.error)
            }
            
            localStorage.setItem("chat-user",JSON.stringify(data));
            setUser(data);

            toast.success("Login Successfull! 🎉", { id: loadingToast });

        } catch (error) {
            toast.error(error.message, { id: loadingToast });
        }finally{
            setLoading(false);
        }
    }

    return {loading, login};
}

export default useLogin

function handleInpErrors( Username, Password){
    if( !Username || !Password ){
        toast.error("Please fill all the fields!");
        return false;
    }

    return true;
}