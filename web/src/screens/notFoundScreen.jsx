import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center">
            <h3 className="text-gray-200 text-lg font-[poppins] font-normal">Página não encontrada!</h3>
            <p className="text-cyan-100 text-lg font-[poppins] font-normal"><Link to='/' className="font-bold">Clique aqui</Link> para voltar para o início.</p>
        </div>
    )
}