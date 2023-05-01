import { useState, useEffect } from "react";

import Footer from "../Footer";
import Header from "../Header";
import CartList from "./CartList";
import { fetchCart } from "../../services/api/fetchAPI";
import formatMoney from "../FormatMoney";

export default function CartScreen() {
    const [productsInCart, setProductInCart] = useState([])
    const formatter = formatMoney()

    useEffect(() => {
        async function fetchApi() {
            const cartResponse = await fetchCart()

            setProductInCart(cartResponse)
        }

        fetchApi()

    }, [setProductInCart])

    function subTotal() {
        let finalPrice = 0
        const productsPrice = productsInCart.map((item) => {
            if (item.product.promotion === true) {
                const calcPrice = item.product.price - (item.product.price * (item.product.promotionPercentage / 100))

                return calcPrice
            }
            return item.product?.price
        })


        for (let i = 0; i < productsInCart.length; i++) {
            finalPrice += productsPrice[i]
        }

        return formatter.format(finalPrice)
    }


    return (
        <div className="flex flex-col h-full">
            <Header />

            <main className="container mx-auto my-10 flex flex-col flex-1 items-center lg:items-stretch lg:px-4">
                <div className="grid gap-2">

                    <h2 className="text-gray-200 font-['Roboto'] font-medium text-3xl xs1:text-xl">Meu carrinho</h2>

                    <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-1 gap-8 lg:items-start justify-between">

                        <div className="flex flex-col gap-2 bg-cyan-700 bg-opacity-80 px-4 py-5 rounded">
                            <h5 className="text-gray-300 font-[Poppins] text-end">Preço</h5>

                            <div className="w-full h-[1px] bg-cyan-500 mb-4" />

                            <div className="flex flex-col gap-6">
                                {productsInCart.map((item) => (
                                    <CartList
                                        key={item.id}
                                        id={item.id}
                                        product={item.product}
                                        quantityProduct={item.quantity}
                                    />
                                ))}
                            </div>

                            <h5 className="text-gray-300 font-[Poppins] text-end mt-2">Subtotal: (2 itens): <span className="font-semibold text-cyan-300">{subTotal()}</span></h5>

                        </div>

                        <div className="bg-cyan-700 bg-opacity-80 w-full h-auto p-8 xs3:p-4">
                            <div className="font-[Poppins] flex flex-col gap-1">
                                <h3 className="text-gray-50 font-semibold text-xl xs3:text-lg">Resumo da compra</h3>

                                <div className="flex text-xs text-gray-200 justify-between">
                                    <span>Produtos ({productsInCart.length}):</span>
                                    <span className="text-cyan-100 font-semibold">{subTotal()}</span>
                                </div>

                                <div className="flex justify-between text-xs text-gray-200 font-semibold">
                                    <span>Frete:</span>
                                    <span className="text-cyan-100 font-semibold">Grátis</span>
                                </div>

                                <div className="flex justify-between text-gray-200 font-semibold xs3:text-sm mt-1">
                                    <span>Total:</span>
                                    <span className="text-cyan-100 font-bold">{subTotal()}</span>
                                </div>

                            </div>
                            <button
                                className="w-full mt-3 p-2 text-xl bg-cyan-100 text-cyan-700 font-semibold rounded transition duration-300 hover:opacity-70 disabled:opacity-70"
                            >
                                Fechar o pedido
                            </button>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}