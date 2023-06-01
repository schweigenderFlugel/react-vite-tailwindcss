import React from "react";

export const ShoppingCartContext = React.createContext();

export function ShoppingCartProvider ({ children }) {
    const [ count, setCount ] = React.useState(0)

    // Product Details - Open/Close
    const [ isProductDetailsOpen, setIsProductDetailsOpen ] = React.useState(false);
    const openProductDetail = () => setIsProductDetailsOpen(true)
    const closeProductDetail = () => setIsProductDetailsOpen(false)

    // Product Details - Show 
    const [ productToShow, setProductToShow  ] = React.useState({});

    console.log('COUNT: ', count)
    return (
    <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailsOpen,
        productToShow,
        setProductToShow
    }}>
        {children}
    </ShoppingCartContext.Provider>
        
    )
}