import React, { useState } from 'react'
import { useAuth } from '../context/Authcontext';
import toast from 'react-hot-toast';

const logout = () => {
    const [loading,setLoading] = useState(false);
    const {setUser} =  useAuth();
    
    const loggedOut = async ()=>{
        setLoading(true);
        try {
            const res = await fetch("/api/auth/logout",{
                method: "POST",
                headers: {"Content-Type" : "application/json"}
            });

            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }

            localStorage.removeItem("chat-user");
            setUser(null);

        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }

    return {loading,loggedOut};
}

export default logout
