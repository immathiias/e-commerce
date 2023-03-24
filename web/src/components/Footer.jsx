import { FiInstagram, FiTwitter } from 'react-icons/fi'


export default function Header() {
    return (
        <div className="bg-cyan-700 w-screen h-24 flex justify-around items-center mt-16 p-12">
            <div className="flex flex-col text-cyan-300 text-md font-normal">
                © Mathias Imports
                <span>Todos os direitos reservados.</span>
            </div>

            <div className="flex text-cyan-300 text-md font-semibold items-center gap-2">
                Redes sociais:
                <span className="flex gap-1 items-center cursor-pointer text-gray-200 font-normal hover:opacity-60 transition"><FiTwitter className="w-5 h-5" /> @mathiasimportsdev</span>
                <span className="flex gap-1 items-center cursor-pointer text-gray-200 font-normal hover:opacity-60 transition"><FiInstagram className="w-5 h-5" /> @mathiasimportsdev</span>
            </div>
        </div>
    )
}