import { useNavigate } from "react-router-dom";

import { FiUser, FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx"
import { navBar } from "./NavBar";


export default function Header() {
    const navigate = useNavigate()

    return (
        <div className="bg-cyan-700 w-screen h-24 flex justify-between items-center p-4 lg:p-12">
            <div className="text-cyan-300 text-base lg:text-xl font-[ubuntu] font-bold">
                MATHIAS<span className="text-cyan-500 text-sm ml-0.5 lg:text-base lg:ml-1">imports</span>
            </div>

            {/* NavBar Mobile */}

            <div className="relative lg:hidden">
                <button onClick={navBar}>
                    <RxHamburgerMenu className="w-8 h-8 text-cyan-300" />
                </button>

                <nav id="navBarMobile">
                    <ul>
                        <li>

                        </li>
                    </ul>
                </nav>
            </div>

            {/* NavBar Desktop */}

            <nav className="lgMax:hidden flex gap-10 xl:gap-16 text-cyan-100 text-sm font-[Poppins] font-bold items-center">
                <ul className="flex gap-6 xl:gap-8">
                    <li>
                        <button>Início</button>
                    </li>
                    <li>
                        <button>Produtos</button>
                    </li>
                    <li>
                        <button>Contatos</button>
                    </li>
                </ul>

                <div className="relative">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Pesquisa..."
                        className="w-60 xl:w-80 py-1 pl-3 pr-11 bg-cyan-500 bg-opacity-60 text-cyan-100 outline-none rounded-xl placeholder:text-cyan-100 placeholder:opacity-60 selection:bg-cyan-700"
                    >

                    </input>
                    <button className="absolute px-2 top-0 bottom-0 right-0 rounded-xl bg-cyan-500 hover:bg-cyan-900 transition duration-300">
                        <FiSearch className="w-5 h-5 cursor-pointer" />
                    </button>
                </div>
            </nav>

            <button
                onClick={() => navigate('/cadastro')}
                className="lgMax:hidden w-32 lg:w-52 text-start text-cyan-100 font-bold flex gap-1 lg:gap-2 cursor-pointer text-xs lg:text-sm items-center hover:opacity-80 transition-all"
            >
                <span><FiUser className="w-4 h-4 lg:w-6 lg:h-6" /></span> Olá, faça seu login ou seu cadastro.
            </button>
        </div>
    )
}