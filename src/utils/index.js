/**
 * This function calculates total price of my orders
 * @param {Array} products cartProducts: Array of Objects 
 * @returns 
 */

export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(products => sum += products.price)
    return sum;
};