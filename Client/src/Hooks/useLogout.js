import React, { useState } from "react";
import { useAuthContext } from "../Context/AuthContext"
import toast  from 'react-hot-toast';


let useLogout = () => {
    const [loading, setLoading] = useState(false);
    let { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            let res = await fetch("http://localhost/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            if (!data) {
               console.error("errror occured while logout");
            }
            localStorage.removeItem("chat-user");
            location.reload();
            setAuthUser();
        } catch (error) {
           console.log(error)
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
};

export default useLogout;