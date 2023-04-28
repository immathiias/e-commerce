import api from './index'

export async function fetchProducts() {
    const response = await api.get('/products')

    return response.data
}
export async function fetchCategories() {
    const response = await api.get('/categories')

    return response.data
}
export async function fetchCart() {
    const response = await api.get('/cart')

    return response.data
}