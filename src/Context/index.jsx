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



    // 1 Establecemos los estados con React. Van a tener valor nulo. 
    // Get Products
    const [ items, setItems ] = React.useState(null);
    const [ filteredItems, setFilteredItems ] = React.useState(null);

    // Get Product By Title or Catgeory
    const [ searchByTitle, setSearchByTitle ] = React.useState(null);
    const [ searchByCategory, setSearchByCategory ] = React.useState(null);


    // 4 Estas funciones van a filtras los items 
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
      }

    // 2 Este useEffect va a filtrar los productos y a su vez va a llamar a una función para filtrarlos por
    // tipo, ya sea categoría o título con sus argumentos. Importante: no olvidar pasar las dependencias
    // al final del UseEffect, que son los estados actuales
    React.useEffect(() => {
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])

    // La función filterBy va a recibir estos parámetros y va a preguntar que tipo de búsqueda hacemos.
    // Dependendiendo de la condición que se cumpla, va a retornar una función. 
    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') return filteredItemsByTitle(items, searchByTitle)
        if (searchType === 'BY_CATEGORY') return filteredItemsByCategory(items, searchByCategory)
        if (searchType === 'BY_TITLE_AND_CATEGORY') return filteredItemsByCategory(items, searchByCategory)
            .filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        if (!searchType) return items;
    }

    React.useEffect(() => {
        // Con fetch estamos diciendo que el Home necesita de la infomación de la API. 
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(response => response.json())
          .then(data => setItems(data))
      }, [])

    console.log('filteredItems: ', filteredItems);

    

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
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory
    }}>
        {children}
    </ShoppingCartContext.Provider>
        
    )
}