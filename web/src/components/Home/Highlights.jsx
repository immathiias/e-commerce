import ProductsHighlights from "../Products/ProductsHighlights";

import smartphone from "/images/smartphone.png"
import headphone from "/images/headphone-bluetooth.png"
import battery from "/images/battery.svg"

const ProductsExample = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-10 py-8 justify-center items-center font-[poppins] font-semibold text-gray-200">
            <ProductsHighlights
                name="Smartphone 256GB | 12GB RAM | 5G"
                img={smartphone}
                price={899.90}
            />

            <ProductsHighlights
                name="Fone de ouvido 500mah Bluetooth 5.2"
                img={headphone}
                price={129.90}
            />

            <ProductsHighlights
                name="Bateria portátil 10.000mah"
                img={battery}
                price={84.90}
            />
        </div>
    )
}

export default function Highlights() {
    return (
        <div>
            <h3 className="text-gray-200 text-center font-['Roboto'] font-medium text-3xl">Destaques</h3>
            <div className="w-full h-auto mx-auto rounded-md mt-1 lg:mt-4 lg:bg-cyan-700 lg:bg-opacity-60">
                <ProductsExample />
            </div>
        </div>
    )
}