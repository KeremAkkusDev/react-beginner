import { createContext, useContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({children}) =>{
    const [baslik, setBaslik] = useState("First React Project");
    const values = {
        baslik,
        setBaslik
    }
    return(
        <NavbarContext.Provider value={values}>{children}</NavbarContext.Provider>
    )
}

export const useNavbar = () => useContext(NavbarContext)
