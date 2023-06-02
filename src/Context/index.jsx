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

    // Shopping Cart - Add Products To Cart
    const [ order, setOrder ] = React.useState([]);

    // Get Products
    const [ items, setItems ] = React.useState(null);

    // Get Product By Title 
    const [ searchByTitle, setSearchByTitle ] = React.useState(null);
    console.log('searchByTitle: ', searchByTitle )

    React.useEffect(() => {
        // Con fetch estamos diciendo que el Home necesita de la infomación de la API. 
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(response => response.json())
          .then(data => setItems(data))
      }, [])

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
        closeCheckoutSideMenu,
        order,
        setOrder,
        items, 
        setItems,
        searchByTitle,
        setSearchByTitle
    }}>
        {children}
    </ShoppingCartContext.Provider>
        
    )
}