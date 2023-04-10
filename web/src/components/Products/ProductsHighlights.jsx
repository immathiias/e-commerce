import Button from "../Button.jsx"

import { FiShoppingCart } from "react-icons/fi"

const Buttons = () => {
    return (
        <>
            <Button
                icon={<FiShoppingCart className="w-6 h-6 lg:w-5 lg:h-5 mr-2 lg:mr-1" />}
                width={'80 xs1:w-60 lg:w-48'} height={'10'} padding={'2'} mt={'1'}
                text="Adicionar ao carrinho"
                color="light" fontSize="sm"
            />

            <Button
                width={'80 xs1:w-60 lg:w-48'} height={'10'} padding={'2'} mt={'2'}
                text="Ver detalhes"
                color="dark" fontSize="sm"
            />
        </>
    )
}

export default function ProductsHighlights(props) {
    const formatter = Intl.NumberFormat("pt-BR", {
        compactDisplay: "long",
        currency: "BRL",
        style: "currency"
    });

    const Price = () => {
        if (props.promotion === true) {
            const calcPrice = props.price - (props.price * (props.promotionPercentage / 100))
            return (
                <div className="text-gray-300 mt-1">
                    <div className="text-xs text-gray-300">
                        De {formatter.format(props.price)}
                    </div>
                    Por {formatter.format(calcPrice)} <span className="text-gray-200">no PIX</span>
                </div>
            )
        }
        return (
            <div className="text-gray-300 mt-1 text-xl xs1:text-sm lg:text-base">
                {formatter.format(props.price)} <span className="text-gray-200">no PIX</span>
            </div>
        )
    }

    return (
        <div>
            <div className="relative">
                {props.promotion === true ? <PromotionStyle percentage={props.promotionPercentage} /> : null}
                <img src={props.img} className="w-80 xs1:w-60 lg:w-48 h-auto rounded-md" />
            </div>
            <div className="w-80 xs1:w-60 lg:w-48 mt-2 text-xl xs1:text-sm lg:text-base">{props.name}</div>
            <Price />
            <Buttons />

        </div>
    )
}

function PromotionStyle({ percentage }) {
    return (
        <div>
            <div className="absolute -top-4 -left-4 bg-cyan-700 p-1 rounded-md shadow-md shadow-cyan-900">
                <h2 className="text-1xl font-[Ubuntu] text-gray-200">{percentage}% de desconto!</h2>
            </div>
        </div>
    )
}