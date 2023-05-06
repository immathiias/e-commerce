import { useNavigate } from "react-router-dom"

import Button from "../Button"
import Input from "../InputSign"

export default function Form() {
    const navigate = useNavigate()

    return (
        <div className="w-80 lg:w-96 xs0:w-screen h-auto px-8 py-6 lg:px-8 bg-cyan-700 rounded-md">
            <form className="flex flex-col gap-2 justify-center items-start text-cyan-100">

                <label htmlFor="email">Seu email:</label>
                <Input
                    type="text" id="email" name="email" placeholder="Digite seu email"
                />

                <label htmlFor="password">Senha:</label>
                <Input
                    type="password" id="password" name="password" placeholder="Digite sua senha"
                />

                <Button
                    width="w-full" height="h-10" padding="p-2" mt="mt-2"
                    text={"Logar"}
                    color="dark" fontSize="lg" fontWeight="bold"
                />
            </form>
            <p className="flex flex-col lg:flex-row gap-0.5 justify-center items-center mt-2 text-xs text-cyan-100">
                Ainda não tem uma conta?
                <button onClick={() => navigate(`/cadastro`)} className="text-gray-300 hover:opacity-80 transition">Clique aqui para se cadastrar.</button>
            </p>
        </div>
    )
}