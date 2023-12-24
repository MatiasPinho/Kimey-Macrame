import { createContext, useEffect, useState } from "react";
 
export const useContextHelper = createContext()

 export const UseContextProvider = ({children}) =>{
    const [isNavActive, setIsNavActive] = useState(false); 
        const contextValue = {
            isNavActive, setIsNavActive
        }
    return(
        <useContextHelper.Provider value = {contextValue}>
            {children}
        </useContextHelper.Provider>
    )
}