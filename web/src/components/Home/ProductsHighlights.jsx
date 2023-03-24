import Button from "../Button.jsx"

import { FiShoppingCart } from "react-icons/fi"

import smartphone from "/images/smartphone.png"
import headphone from "/images/headphone-bluetooth.png"
import battery from "/images/battery.svg"

const Buttons = () => {
    return (
        <>
            <Button
                icon={<FiShoppingCart className="w-5 h-5 mr-1" />}
                w={48} h={10} p={2} mt={1}
                text="Adicionar ao carrinho"
                color="light" fontSize="sm"
            />

            <Button
                w={48} h={10} p={2} mt={2}
                text="Ver detalhes"
                color="dark" fontSize="sm"
            />
        </>
    )
}

export default function ProductsHighlights() {
    return (
        <div className="flex gap-10 py-6 px-10 font-[poppins] font-semibold text-gray-200">
            {/* Smartphone */}
            <div>
                <img src={smartphone} className="w-48 h-48 rounded-md" />
                <div className="w-48 mt-2">Smartphone 256GB | 12GB RAM | 5G</div>
                <div className="text-gray-300 mt-1">R$ 899,90 <span className="text-gray-200">no PIX</span></div>
                <Buttons />
            </div>

            {/* Headphone */}
            <div>
                <img src={headphone} className="w-48 h-48 rounded-md" />
                <div className="w-48 mt-2">Fone de ouvido 500mah Bluetooth 5.2</div>
                <div className="text-gray-300 mt-1">R$ 129,90 <span className="text-gray-200">no PIX</span></div>
                <Buttons />
            </div>

            {/* Battery */}
            <div>
                <img src={battery} className="w-48 h-48 rounded-md" />
                <div className="w-48 mt-2">Bateria portátil 10.000mah</div>
                <div className="text-gray-300 mt-1">R$ 84,90 <span className="text-gray-200">no PIX</span></div>
                <Buttons />
            </div>
        </div>
    )
}