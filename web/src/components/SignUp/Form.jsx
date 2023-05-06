import { useNavigate } from "react-router-dom"

import Button from "../Button"
import Input from "../InputSign"

export default function Form() {
    const navigate = useNavigate()

    return (
        <div className="w-80 lg:w-96 xs0:w-screen h-auto px-4 py-6 lg:px-8 bg-cyan-700 rounded-md">
            <form className="flex flex-col gap-2 justify-center items-start text-cyan-100">

                <label htmlFor="name">Nome:</label>
                <Input
                    type="text" id="name" name="name" placeholder="Digite seu nome"
                />

                <label htmlFor="email">Seu email:</label>
                <Input
                    type="text" id="email" name="email" placeholder="Digite seu email"
                />

                <label htmlFor="password">Senha:</label>
                <Input
                    type="password" id="password" name="password" placeholder="Digite sua senha"
                />

                <label htmlFor="confirmPassword">Confirme sua senha:</label>
                <Input
                    type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirme sua senha"
                />

                <label htmlFor="birthday">Data de nascimento:</label>
                <div className="flex gap-2">

                    <select
                        name="month"
                        id="month"
                        defaultValue={'default'}
                        className="text-gray-600 outline-none font-medium bg-opacity-70 p-1 bg-cyan-100 rounded border-b-4 border-cyan-500"
                    >
                        <option value="default" disabled>Dia</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <select
                        name="day"
                        id="day"
                        defaultValue={'default'}
                        className="text-gray-600 outline-none font-medium bg-opacity-70 p-1 bg-cyan-100 rounded border-b-4 border-cyan-500"
                    >
                        <option value="default" disabled>Mês</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>

                    <input
                        type="number"
                        placeholder="Ano"
                        aria-valuemin={1900}
                        aria-valuemax={2020}
                        className="w-16 text-gray-600 outline-none font-medium bg-opacity-70 p-1 bg-cyan-100 rounded border-b-4 border-cyan-500 placeholder:text-gray-600"
                    />
                </div>

                <Button
                    width="w-full" height="h-10" padding="p-2" mt="mt-2"
                    text={"Cadastre-se"}
                    color="dark" fontSize="lg" fontWeight="bold"
                />
            </form>
            <p className="flex xs0:flex-col gap-0.5 justify-center items-center mt-1 text-xs text-cyan-100">
                Já tem uma  conta?
                <button onClick={() => navigate(`/login`)} className="text-gray-300 hover:opacity-80 transition">Clique aqui para logar.</button>
            </p>
        </div>
    )
}