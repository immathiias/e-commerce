import { FiUser } from "react-icons/fi";


export default function Header() {
    return (
        <div className="bg-cyan-700 w-screen h-24 flex justify-between items-center p-4 lg:p-12">
            <div className="text-cyan-300 text-sm lg:text-xl font-[ubuntu] font-bold">
                MATHIAS<span className="text-cyan-500 text-xs lg:text-base lg:ml-1">imports</span>
            </div>

            <div className="w-32 lg:w-52 text-cyan-100 font-bold flex gap-1 lg:gap-2 cursor-pointer text-xs lg:text-sm items-center hover:opacity-80 transition-all">
                <span><FiUser className="w-4 h-4 lg:w-6 lg:h-6" /></span> Olá, faça seu login ou seu cadastro.
            </div>
        </div>
    )
}