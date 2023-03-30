import { DropdownProvider, DropdownOption, DropdownRoot } from "./Dropdown";

import { Products, Contacts } from './Content'

export default function NavBar() {
    return (
        <DropdownProvider>
            <div>
                <div className="py-2 bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-500">
                    <ul className="flex justify-center gap-8 text-cyan-700 font-[ubuntu] font-bold">
                        <button className="transition-opacity duration-200 hover:opacity-60">Início</button>
                        <li>
                            <DropdownOption
                                name="Produtos"
                                content={Products}
                            />
                        </li>
                        <li>
                            <DropdownOption
                                name="Contatos"
                                content={Contacts}
                                backgroundHeight={90}
                            />
                        </li>
                    </ul>

                </div>
                <DropdownRoot />
            </div>
        </DropdownProvider>
    )
}