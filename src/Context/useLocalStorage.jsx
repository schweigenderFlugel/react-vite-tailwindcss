import React from "react";

function useLocalStorage(accountItem, signOutItem) {
    const [ signItem, setSignItem ] = React.useState({});
    const accountInLocalStorage = localStorage.getItem(accountItem);
    const signOutInLocalStorage = localStorage.getItem(signOutItem);
    let parsedAccount;
    let parsedSignOut;

    if (!accountInLocalStorage) {
        localStorage.setItem(accountItem, JSON.stringify({}))
        parsedAccount = {};
    } else {
        parsedAccount = JSON.parse(accountInLocalStorage);
        setSignItem(parsedAccount)
    }

    if (!signOutInLocalStorage) {
        localStorage.setItem(signOutItem, JSON.stringify({}))
        parsedSignOut = {};
    } else {
        parsedSignOut = JSON.parse(signOutInLocalStorage);
        setSignItem(parsedSignOut)
    }
    return {
        signItem,
        setSignItem
    }
}

export default { useLocalStorage }