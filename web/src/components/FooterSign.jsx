
import { FiInstagram, FiTwitter } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export default function FooterSign() {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex gap-1 justify-center items-center font-[poppins] text-sm text-cyan-100">
                <button onClick={() => navigate("/")} className="font-bold text-cyan-500 hover:opacity-60 transition">Clique aqui</button> 
                para voltar para a tela inicial.
            </div>
            <div className="flex flex-col gap-12">
                <div className="flex flex-col mt-10 lg:flex-row text-cyan-300 text-sm lg:text-md font-semibold items-center gap-0.5 lg:gap-2">
                    Redes sociais:
                    <span className="flex gap-1 items-center cursor-pointer text-gray-200 font-normal hover:opacity-60 transition"><FiTwitter className="w-3 h-3 lg:w-5 lg:h-5" /> @mathiasimportsdev</span>
                    <span className="flex gap-1 items-center cursor-pointer text-gray-200 font-normal hover:opacity-60 transition"><FiInstagram className="w-3 h-3 lg:w-5 lg:h-5" /> @mathiasimportsdev</span>
                </div>
                <div className="flex flex-col mb-8 text-center text-cyan-300 text-xs lg:text-sm font-normal">
                    © Mathias Imports
                    <span>Todos os direitos reservados.</span>
                </div>
            </div>
        </>
    )
}