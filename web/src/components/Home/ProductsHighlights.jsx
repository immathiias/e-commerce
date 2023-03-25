import Button from "../Button.jsx"

import { FiShoppingCart } from "react-icons/fi"

import smartphone from "/images/smartphone.png"
import headphone from "/images/headphone-bluetooth.png"
import battery from "/images/battery.svg"

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

export default function ProductsHighlights() {
    return (
        <div className="flex flex-col lg:flex-row gap-10 py-8 justify-center items-center font-[poppins] font-semibold text-gray-200">
            {/* Smartphone */}
            <div>
                <img src={smartphone} className="w-80 xs1:w-60 lg:w-48 h-auto rounded-md" />
                <div className="w-80 xs1:w-60 lg:w-48 mt-2 text-xl xs1:text-sm lg:text-base">Smartphone 256GB | 12GB RAM | 5G</div>
                <div className="text-gray-300 mt-1 text-xl xs1:text-sm lg:text-base">R$ 899,90 <span className="text-gray-200">no PIX</span></div>
                <Buttons />
            </div>

            {/* Headphone */}
            <div>
                <img src={headphone} className="w-80 xs1:w-60 lg:w-48 h-auto rounded-md" />
                <div className="w-48 mt-2 text-xl lg:text-base">Fone de ouvido 500mah Bluetooth 5.2</div>
                <div className="text-gray-300 mt-1 text-xl lg:text-base">R$ 129,90 <span className="text-gray-200">no PIX</span></div>
                <Buttons />
            </div>

            {/* Battery */}
            <div>
                <img src={battery} className="w-80 xs1:w-60 lg:w-48 h-auto rounded-md" />
                <div className="w-48 mt-2 text-xl lg:text-base">Bateria portátil 10.000mah</div>
                <div className="text-gray-300 mt-1 text-xl lg:text-base">R$ 84,90 <span className="text-gray-200">no PIX</span></div>
                <Buttons />
            </div>
        </div>
    )
}