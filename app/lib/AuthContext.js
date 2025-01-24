"use client";
import { createContext, useContext, useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"


const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)  
      const [loading, setLoading] = useState(true);  
      const auth = getAuth();

      useEffect(() => {    
        const unsubscribe = onAuthStateChanged(auth, (user) => {       
             setUser(user)        
             setLoading(false)    
            })    
            return () => unsubscribe() 
         }, 
         [auth])  
         return (    
         <AuthContext.Provider value={{ user, loading }}>     
          {children}   
           </AuthContext.Provider>  
           )
        }
         export const useAuth = () => useContext(AuthContext)