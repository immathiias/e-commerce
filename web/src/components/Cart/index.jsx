import { useState, useEffect } from "react";

import Footer from "../Footer";
import Header from "../Header";
import CartList from "./CartList";
import { fetchCart } from "../../services/api/fetchAPI";

export default function CartScreen() {

    const [productsInCart, setProductInCart] = useState([])

    useEffect(() => {
        async function fetchApi() {
            const cartResponse = await fetchCart()

            setProductInCart(cartResponse)

        }

        fetchApi()

    }, [setProductInCart])

    return (
        <div className="flex flex-col h-full">
            <Header />

                <main className="container mx-auto my-10 flex flex-col flex-1 gap-12 items-center">
                    <div className="grid gap-2">

                        <h2 className="text-gray-200 font-['Roboto'] font-medium text-3xl">Meu carrinho</h2>
                        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">

                            <div className="bg-cyan-700 bg-opacity-80 lg:w-[720px] h-auto px-4 py-5">
                                {productsInCart.map((item) => (
                                    <CartList
                                        key={item.id}
                                        product={item.product}
                                    />
                                ))}
                            </div>

                            <div className="bg-cyan-700 bg-opacity-80 h-auto p-8">
                                <div className="font-[Poppins] flex flex-col gap-1">
                                    <h3 className="text-gray-50 font-semibold text-xl">Finalizar a compra</h3>
                                    <h3 className="text-gray-300">Subtotal (1 item): <span className="text-cyan-100 font-semibold">R$ 4000,00</span></h3>

                                </div>
                                <button
                                    className="w-full mt-3 p-2 text-xl bg-cyan-100 text-cyan-700 font-semibold rounded transition duration-300 hover:opacity-70 disabled:opacity-70"
                                >
                                    Fechar pedido
                                </button>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
        </div>
    )
}