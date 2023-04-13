import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AiFillStar, AiOutlineStar, AiOutlineShareAlt } from 'react-icons/ai'

import Header from '../Header'
import api from '../../services/api'
import { Price } from './Price'
import Button from '../Button'
import Footer from '../Footer'
import Loading from '../Loading'

export default function ProductDetails() {
    const [product, setProduct] = useState({})
    const [reviews, setReviews] = useState([])
    const [colors, setColors] = useState([])
    const [colorSelected, setColorSelected] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchAPI() {
            try {
                const response = await api.get(`/products/${id}`)
                setProduct(response.data)

                const reviewsProduct = response.data.reviews
                setReviews(reviewsProduct)

                const colorsProduct = await response.data.colors
                setColors(colorsProduct)
                setColorSelected(colorsProduct[0])
                setLoading(false)
            } catch (err) {
                navigate("/produtos")
            }
        }

        fetchAPI()
    }, [])


    return (
        <>
            <Header />
            <main className="container mx-auto grid gap-6 my-8 justify-center items-center">

                {
                    loading === true ?
                        <div className="w-full h-auto mx-auto">
                            <Loading />
                        </div>
                        :
                        <>
                            <div className="flex justify-between items-center">
                                <button onClick={() => navigate("/produtos")} className="font-semibold text-cyan-100">Voltar</button>
                                <div>

                                    <AiOutlineShareAlt className="w-6 h-6 text-cyan-100" />
                                </div>
                            </div>

                            {/* produto */}
                            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-4 lg:gap-0 bg-cyan-700 p-6 w-auto h-auto">
                                <div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
                                    <img src={product.img} alt={product.name} className={`w-60 lg:w-96 rounded border-4 border-[${colorSelected.color}]`} />

                                    <div>
                                        <h6 className="text-gray-200 font-[Poppins] mb-2">Novo | {product.solds} vendidos</h6>
                                        <h2 className="text-xl w-60 text-cyan-100 font-bold font-[Roboto]">{product.name}</h2>

                                        <div className="flex mt-1 items-center gap-2 text-xs text-gray-200 font-bold font-[Roboto]">
                                            <h3>Avaliação</h3>
                                            <div className="flex">
                                                <AiFillStar className="text-[#DAA520]" />
                                                <AiFillStar className="text-[#DAA520]" />
                                                <AiFillStar className="text-[#DAA520]" />
                                                <AiFillStar className="text-[#DAA520]" />
                                                <AiOutlineStar className="text-[#DAA520]" />
                                            </div>
                                        </div>

                                        <div className="grid gap-1 mt-2 mb-2">
                                            <div>
                                                <h2 className="text-cyan-300 font-bold font-[Ubuntu]">Cor: <span className="text-gray-200">{colorSelected.name}</span></h2>
                                            </div>
                                            <div className="flex gap-1">

                                                {colors.map((c) => (
                                                    <button
                                                        key={c.id}
                                                        className={`${c.id === colorSelected.id ? 'opacity-60' : ''}`}
                                                        onClick={() => { c.id === colorSelected.id ? '' : setColorSelected(c) }}
                                                    >
                                                        <img src={product.img} className={`w-10 border-2 border-[${c.color}] rounded`} />
                                                    </button>
                                                ))}

                                            </div>
                                        </div>

                                        <div className="flex flex-col items-start">
                                            <Price
                                                price={product.price}
                                                promotion={product.promotion}
                                                promotionPercentage={product.promotionPercentage}
                                                style01={"text-cyan-100 font-bold mt-1"}
                                                style02={"text-xs text-gray-300 font-normal line-through"}
                                                style03={"text-gray-300 mt-1 text-xl xs1:text-sm lg:text-base"}
                                            />
                                            <h3 className="text-[#90ee90] font-bold -mt-1">{product.promotion === true ? `${product.promotionPercentage}% OFF!` : ''}</h3>
                                        </div>
                                    </div>


                                </div>

                                <div className="flex flex-col">
                                    <h3 className="text-xs text-gray-300 font-semibold font-[Roboto] mt-2 lg:mt-0">{product.stock > 0 ? "Em estoque" : "Produto indisponível"}</h3>
                                    <h3 className="text-xs text-green-300 font-semibold font-[Roboto]">Frete grátis</h3>

                                    <div className="flex gap-2 items-center mt-1">
                                        <label htmlFor="quantity" className="text-cyan-100 font-semibold">Quantidade:</label>
                                        <select id="quantityProduct" name="quantityProduct"
                                            className="bg-transparent outline-none text-center text-cyan-100 font-semibold font-[Ubuntu] rounded cursor-pointer focus-visible:bg-cyan-900"
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3" >3</option>
                                            <option value="4" >4</option>
                                            <option value="5" >5</option>
                                            <option value="6" >6</option>
                                            <option value="7" >7</option>
                                            <option value="8" >8</option>
                                            <option value="9" >9</option>
                                            <option value="8" >10</option>
                                        </select>
                                    </div>

                                    <button
                                        className="w-60 text-cyan-100 font-bold py-3 px-6 rounded bg-cyan-500 mt-2 hover:bg-opacity-80 transition duration-300"
                                    >
                                        Comprar agora
                                    </button>

                                    <button
                                        className="w-full text-cyan-500 font-bold py-3 px-6 rounded bg-cyan-100 mt-2 hover:bg-opacity-80 transition duration-300"
                                    >
                                        Adicionar ao carrinho
                                    </button>
                                </div>
                            </div>
                        </>
                }

                {/* sobre */}

                <div className="flex flex-col justify-center items-start">
                    <h3 className="text-cyan-100 font-semibold text-xl">Sobre o produto</h3>
                    {loading === true ? <Loading /> : <p className="mt-2 w-80 xs1:w-52 lg:w-auto max-w-4xl text-cyan-300">{product.description}</p>}

                </div>

                {/* avaliações */}

                <div className="flex flex-col justify-center items-start">
                    <h3 className="text-cyan-100 font-semibold text-xl mb-4">Avaliações</h3>
                    {loading === true ? <Loading /> : reviews.map((review) => (
                        <div
                            key={review.id}
                            className="flex flex-col bg-cyan-700 p-5 w-full xs1:w-auto mx-auto justify-center mt-2 font-[Roboto] rounded"
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <span className="text-gray-200 font-bold">{review.user}</span>
                                </div>

                                <p className="text-cyan-100 font-semibold">Nota: {review.score}/5</p>

                            </div>
                            <div className="mt-1 w-60 lg:w-auto max-w-4xl">
                                <p className="text-gray-400 font-semibold">{review.comment}</p>
                            </div>
                        </div>
                    )).slice(0, 5)}
                </div>

            </main>

            <Footer />
        </>

    )
}