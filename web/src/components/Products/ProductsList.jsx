import { useNavigate } from "react-router-dom"

import Button from "../Button.jsx"

import { FiShoppingCart } from "react-icons/fi"
import { Price } from "./Price.jsx"

const Buttons = ({ id }) => {
    const navigate = useNavigate()

    const goProduct = () => {
        navigate(`/produto/${id}`)
        window.scrollTo(0, 0)
    }
    return (
        <>
            <Button
                icon={<FiShoppingCart className="w-6 h-6 lg:w-5 lg:h-5 mr-2 lg:mr-1" />}
                width="w-80 xs1:w-60 lg:w-48" height="h-10" padding="p-1" mt="mt-1"
                text="Adicionar ao carrinho"
                color="light" fontSize="sm"
            />

            <Button
                onClick={() => goProduct(id)}
                width="w-80 xs1:w-60 lg:w-48" height="h-10" padding="p-2" mt="mt-2"
                text="Ver detalhes"
                color="dark" fontSize="sm"
            />
        </>
    )
}

export default function ProductsList(props) {

    return (
        <div>
            <div className="relative">
                {props.promotion === true && props.bestsellers == false ? <PromotionStyle percentage={props.promotionPercentage} /> : null}
                {props.bestsellers == true ? <BestSellersStyle position={props.positionSold} /> : null}
                <img src={props.img} className="w-80 xs1:w-60 lg:w-48 h-auto rounded-md" />
            </div>
            <div className="w-80 xs1:w-60 lg:w-48 mt-2 text-xl xs1:text-sm lg:text-base">{props.name}</div>

            <Price
                price={props.price}
                promotion={props.promotion}
                promotionPercentage={props.promotionPercentage}
                style01={"text-gray-200 mt-1"}
                style02={"text-xs text-gray-300 line-through"}
                style03={"text-gray-300 mt-1 text-xl xs1:text-sm lg:text-base"}
            />

            <Buttons id={props.id} />

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

function BestSellersStyle({ position }) {
    return (
        <div>
            <div className="absolute -top-4 -left-4 bg-cyan-700 p-1 rounded-md shadow-md shadow-cyan-900">
                <h2 className="text-1xl font-[Ubuntu] text-gray-200">{position}º</h2>
            </div>
        </div>
    )
}