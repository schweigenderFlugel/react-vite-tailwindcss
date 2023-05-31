import React from "react";

export const ShoppingCartContext = React.createContext();

export function ShoppingCartProvider ({ children }) {
    const [ count, setCount ] = React.useState(0)
    console.log('COUNT: ', count)
    return (
    <ShoppingCartContext.Provider value={{
        count,
        setCount
    }}>
        {children}
    </ShoppingCartContext.Provider>
        
    )
}