import { FaWhatsappSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { IoAlert } from 'react-icons/io5'
 
export function Contacts() {
    return (
        <div className="flex flex-col gap-6 px-6 py-7 whitespace-nowrap">
            <div>
                <h2 className="text-cyan-900 font-bold mb-1 -mt-1">Telefone:</h2>
                <ul className="flex flex-col gap-1 font-semibold">
                    <li>
                        <button className="flex items-center gap-1 text-[#25D366] hover:opacity-60 transition-opacity"><FaWhatsappSquare className="w-6 h-6" /> (11) 99999-9999</button>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="text-cyan-900 font-bold mb-1 -mt-1">Redes sociais:</h2>
                <ul className="flex flex-col gap-1 font-semibold">
                    <li>
                        <button className="flex items-center gap-1 text-[#833AB4] hover:opacity-60 transition-opacity"><FaInstagramSquare className="w-6 h-6" /> @mathiasimportsdev</button>
                    </li>
                    <li>
                        <button className="flex items-center gap-1 text-[#1DA1F2] hover:opacity-60 transition-opacity"><FaTwitterSquare className="w-6 h-6" /> @mathiasimportsdev</button>
                    </li>
                </ul>
            </div>

            <div className="grid font-normal font-[poppins] text-cyan-900">
                <span className="flex items-center"><IoAlert className="-ml-2 w-5 h-5" /> Siga a gente nas redes socias para ficar</span>
                <span>por dentro de tudo sobre a loja.</span>
            </div>
        </div>
    )
}