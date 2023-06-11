import React, { createContext, useState, useEffect } from 'react';
import { IContext, IAuthProvader, IUser } from './types';
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from './util';


export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvader = ({ children }: IAuthProvader) => {
    const [user, setUser] = useState<IUser | null>()

    useEffect(() => {
        const user = getUserLocalStorage();

        if (user) {
            setUser(user);
        }
    },[]);

    async function authenticate (email: string, password: string) {
        const response = await LoginRequest(email, password)
        const payload = { token: response.token, email };
        setUser(payload); //salvando local
        setUserLocalStorage(payload); //salvando em DB
    }

    function logout () {
        setUser(null);
        setUserLocalStorage(null);
    }

    return (

        <AuthContext.Provider value={{...user, authenticate, logout }}>
            {children}    
        </AuthContext.Provider>   

    )
}