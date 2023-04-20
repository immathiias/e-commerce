import Footer from "../Footer";
import Header from "../Header";

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi"

export default function ContactScreen() {
    return (
        <div className="flex flex-col flex-1 w-full h-screen justify-between">
            <Header />

            <main className="container mx-auto my-10 flex flex-col gap-12 justify-center items-center">
                <div className="grid gap-2">
                    <div className="text-gray-200 font-['Roboto'] font-medium text-3xl text-center">Contatos</div>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <button className="flex items-center justify-center gap-2 text-[#adadad] font-['Ubuntu'] font-semibold text-xl transition duration-300 hover:opacity-70">
                            <span>
                                <HiOutlinePhone className="w-6 h-6" />
                            </span>
                            99 9 9999-9999
                        </button>

                        <button className="flex items-center justify-center gap-2 text-[#adadad] font-['Ubuntu'] font-semibold text-xl transition duration-300 hover:opacity-70">
                            <span>
                                <HiOutlineMail className="w-6 h-6" />
                            </span>
                            contato@mathiasimports.com
                        </button>
                    </div>

                    <div className="text-gray-200 font-['Roboto'] font-medium text-3xl text-center mt-4">Redes sociais</div>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <button className="flex items-center justify-center gap-2 text-[#5B51D8] font-['Ubuntu'] font-semibold text-xl transition duration-300 hover:opacity-70">
                            <span>
                                <FaInstagram className="w-6 h-6" />
                            </span>
                            @mathiasimportsdev
                        </button>

                        <button className="flex items-center justify-center gap-2 text-[#1DA1F2] font-['Ubuntu'] font-semibold text-xl transition duration-300 hover:opacity-70">
                            <span>
                                <FaTwitter className="w-6 h-6" />
                            </span>
                            @mathiasimportsdev
                        </button>

                        <button className="flex items-center justify-center gap-2 text-[#FF0000] font-['Ubuntu'] font-semibold text-xl transition duration-300 hover:opacity-60">
                            <span>
                                <FaYoutube className="w-6 h-6" />
                            </span>
                            Mathias Imports
                        </button>
                    </div>


                </div>
            </main>

            <Footer />
        </div>
    )
}