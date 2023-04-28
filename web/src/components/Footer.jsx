import { FiInstagram, FiTwitter } from 'react-icons/fi'


export default function Footer() {
    return (
        <div className="shrink-0 bg-cyan-700 w-screen h-24 flex justify-around items-center mt-16 px-1 lg:px-12">
            <div className="flex flex-col text-cyan-300 text-xs lg:text-sm font-normal">
                © Mathias Imports
                <span>Todos os direitos reservados.</span>
            </div>

            <div className="flex flex-col lg:flex-row text-cyan-300 text-sm lg:text-md font-semibold items-center gap-0.5 lg:gap-2">
                Redes sociais:
                <span className="flex gap-1 items-center cursor-pointer text-gray-200 font-normal hover:opacity-60 transition"><FiTwitter className="w-3 h-3 lg:w-5 lg:h-5" /> @mathiasimportsdev</span>
                <span className="flex gap-1 items-center cursor-pointer text-gray-200 font-normal hover:opacity-60 transition"><FiInstagram className="w-3 h-3 lg:w-5 lg:h-5" /> @mathiasimportsdev</span>
            </div>
        </div>
    )
}