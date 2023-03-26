import Button from "../Button.jsx"

import { FiShoppingCart } from "react-icons/fi"

const Buttons = () => {
    return (
        <>
            <Button
                icon={<FiShoppingCart className="w-6 h-6 lg:w-5 lg:h-5 mr-2 lg:mr-1" />}
                w={'80 xs1:w-60 lg:w-48'} h={10} p={2} mt={1}
                text="Adicionar ao carrinho"
                color="light" fontSize="sm"
            />

            <Button
                w={'80 xs1:w-60 lg:w-48'} h={10} p={2} mt={2}
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
    return (
            <div>
                <img src={props.img} className="w-80 xs1:w-60 lg:w-48 h-auto rounded-md" />
                <div className="w-80 xs1:w-60 lg:w-48 mt-2 text-xl xs1:text-sm lg:text-base">{props.name}</div>
                <div className="text-gray-300 mt-1 text-xl xs1:text-sm lg:text-base">{formatter.format(props.price)} <span className="text-gray-200">no PIX</span></div>
                <Buttons />

        </div>
    )
}