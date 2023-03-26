import { FiArrowDown } from "react-icons/fi";

export default function BottomHeader() {
    return (
        <div className="w-screen h-10 bg-cyan-300 flex text-sm lg:text-base justify-center items-center">
            <div className="text-gray-600 font-bold flex gap-6">
                <span className="cursor-pointer">Início</span>

                <span className="flex gap-1 items-center cursor-pointer">
                    Produtos <FiArrowDown className="w-4 h-4" />
                </span>

                <span className="cursor-pointer">Contatos</span>
            </div>
        </div>
    )
}