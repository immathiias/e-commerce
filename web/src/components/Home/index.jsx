import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import Header from "../Header"
import SeparatorLine from "../SeparatorLine"
import welcomeImg from "/images/welcome.jpg"
import ProductsHighlights from "../Products/ProductsList"
import CategoryList from "../Category/CategoryList"
import Footer from "../Footer"

import Loading from "../Loading"
import { fetchProducts, fetchCategories } from "../../services/api/fetchAPI";

function Home() {
    const [loading, setLoading] = useState(true)
    const [productsHighlights, setProductsHighlights] = useState([])
    const [categories, setCategories] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        async function fetchAPI() {
            const responseProduct = await fetchProducts()
            const responseCategory = await fetchCategories()

            setProductsHighlights(responseProduct)
            setCategories(responseCategory)
            setLoading(false)
        }

        fetchAPI()
    }, [])
    return (
        <div className="flex flex-col h-full">
            <Header />
            <main className="container mx-auto my-10 grid gap-12 flex-1 justify-center items-center">
                <img src={welcomeImg} className="rounded-md mx-auto w-screen p-6 sm2:w-full sm2:p-0 md:p-0 h-auto" />
                <SeparatorLine />

                {/* products highlights */}
                <div>
                    <div className="flex xs1:flex-col items-center justify-around md:justify-between">
                        <h3 className="text-gray-200 font-['Roboto'] font-medium xs2:text-xl text-3xl">Produtos em destaque</h3>
                        <button
                            onClick={() => navigate("/produtos")}
                            className="text-cyan-100 text-sm px-2 py-1 font-bold rounded hover:text-opacity-80 transition duration-300">
                            Ver todos
                        </button>
                    </div>
                    <div className="w-full lg:max-w-6xl h-auto mx-auto rounded-md mt-1 lg:mt-4 lg:bg-cyan-700 lg:bg-opacity-60 overflow-auto">
                        <div className="flex flex-col lg:flex-row gap-10 py-8 justify-center items-center font-[poppins] font-semibold text-gray-200">
                            {loading === true ? <Loading /> : productsHighlights.map((product) => (
                                <ProductsHighlights
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    img={product.img}
                                    price={product.price}
                                    promotion={product.promotion}
                                    promotionPercentage={product.promotionPercentage}
                                    bestsellers={false}
                                />
                            )).slice(0, 4)}
                        </div>
                    </div>
                </div>

                <SeparatorLine />

                {/* categories */}
                <div>
                    <h3 className="text-gray-200 text-center font-['Roboto'] font-medium text-3xl">Categorias</h3>
                    <div className="w-80 lg:w-full xs1:w-auto h-auto mx-auto rounded-md mt-1 lg:mt-4">
                        <div className="flex flex-col lg:flex-row justify-center py-8 gap-10 font-[poppins]">
                            {loading === true ? <Loading /> : categories.map((category) => (
                                <CategoryList
                                    key={category.id}
                                    name={category.name}
                                    img={category.img}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Home