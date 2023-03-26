import FooterSign from "../FooterSign"
import Form from "./Form";

export default function Login() {
    return (
        <div className="flex flex-col mx-auto h-screen justify-between items-center">
            <div className="flex flex-col mt-40 mx-auto xs0:px-8 items-center">
                <div className="text-cyan-100 font-bold font-[roboto] text-xl mb-4">Faça o seu login!</div>
                <Form/>
                <div className="mt-2">
                    <FooterSign />
                </div>
            </div>


        </div>

    )
}