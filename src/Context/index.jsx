import React from "react";

export const ShoppingCartContext = React.createContext();

export function ShoppingCartProvider ({ children }) {
    const [ count, setCount ] = React.useState(0)

    // Product Details - Open/Close
    const [ isProductDetailsOpen, setIsProductDetailsOpen ] = React.useState(false);
    const openProductDetail = () => setIsProductDetailsOpen(true)
    const closeProductDetail = () => setIsProductDetailsOpen(false)

    // Chekout SideMenu - Open/Close
    const [ isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen ] = React.useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Details - Show 
    const [ productToShow, setProductToShow  ] = React.useState({});

    // Shopping Cart - Add Products To Cart
    const [ cartProducts, setCartProducts  ] = React.useState([]);

    return (
    <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailsOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen, 
        setIsCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu
    }}>
        {children}
    </ShoppingCartContext.Provider>
        
    )
}