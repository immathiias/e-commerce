import { FiUser } from "react-icons/fi";


export default function Header() {
    return (
        <div className="bg-cyan-700 w-screen h-24 flex justify-between items-center p-12">
            <div className="text-cyan-300 text-xl font-bold gap-1">
                MATHIAS<span className="text-cyan-500 text-lg ml-1">imports</span>
            </div>

            <div className="w-56 text-cyan-100 font-bold flex gap-4 cursor-pointer items-center hover:opacity-80 transition-all">
                <span><FiUser className="w-8 h-8" /></span> Olá, faça seu login ou seu cadastro.
            </div>
        </div>
    )
}