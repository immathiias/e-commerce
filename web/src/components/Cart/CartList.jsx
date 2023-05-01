import { useState } from "react"
import formatMoney from "../FormatMoney"

export default function CartList({ id, product, quantityProduct }) {
    const [quantity, setQuantity] = useState(quantityProduct)

    function GetPrice() {
        const formatter = formatMoney()

        if (product.promotion === true) {
            const calcPrice = product.price - (product.price * (product.promotionPercentage / 100))

            return (
                <div className="text-cyan-300 xs2:text-xs font-[Poppins] font-semibold">

                    {formatter.format(calcPrice)}
                </div>
            )

        }
    }


    return (
        <>
            <div className="flex gap-3 justify-between items-start">

                <div className="flex font-[Poppins] gap-4">
                    <img src={product.img} className="w-20 xs3:w-16 xs:w-10 lg:w-20 h-full rounded-md" />
                    <div className="flex flex-col">
                        <h3 className="xs2:w-56 xs1:w-36 text-cyan-100 font-semibold xs3:text-xs">{product.name}</h3>
                        <div className="text-sm text-green-600">Frete grátis</div>

                        <div className="flex items-center mt-1">
                            <button
                                onClick={() => {
                                    if (quantity === 1) {
                                        return;
                                    }
                                    setQuantity(quantity - 1)
                                }}
                                className="bg-gray-200 px-2 py-1 rounded-l text-cyan-700 transition duration-300 hover:bg-opacity-70"
                            >-</button>

                            <p className="bg-gray-200 px-4 py-1 text-cyan-700">{quantity}</p>

                            <button
                                onClick={() => {
                                    if (quantity === 10) {
                                        return;
                                    }
                                    setQuantity(quantity + 1)
                                }}
                                className="bg-gray-200 px-2 py-1 rounded-r text-cyan-700 transition duration-300 hover:bg-opacity-70"
                            >+</button>
                        </div>
                    </div>

                </div>

                <GetPrice />

            </div>

            <div className="w-full h-[1px] bg-cyan-500" />
        </>
    )
}