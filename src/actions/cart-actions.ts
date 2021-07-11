export const ADD_TO_CART = 'ADD_TO_CART';

export function addToCart(product: string, quantity: number, unitCost: number) {
    return {
        type: ADD_TO_CART,
        payload: {
            product,
            quantity,
            unitCost
        }
    }
}