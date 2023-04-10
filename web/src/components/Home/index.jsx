import { useState, useEffect } from "react"


import Header from "../Header"
import NavBar from "../Navigation/NavBar"
import SeparatorLine from "../SeparatorLine"
import welcomeImg from "/images/welcome.jpg"
import ProductsHighlights from "../Products/ProductsHighlights"
import CategoryList from "../Category/CatogoryList"
import Footer from "../Footer"

import api from "../../services/api"
import Loading from "../Loading"

function Home() {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function fetchAPI() {
            const responseProduct = await api.get('/products')
            const responseCategory = await api.get('/categories')

            setProducts(responseProduct.data)
            setCategories(responseCategory.data)
            setLoading(false)
        }

        fetchAPI()
    }, [])
    return (
        <>
            <Header />
            <NavBar />
            <main className="container mx-auto my-10 grid gap-12 justify-center items-center">
                <img src={welcomeImg} className="rounded-md mx-auto w-screen p-6 sm2:w-full sm2:p-0 md:p-0 h-auto" />
                <SeparatorLine />

                {/* products highlights */}
                <div>
                    <h3 className="text-gray-200 text-center font-['Roboto'] font-medium text-3xl">Destaques</h3>
                    <div className="w-full h-auto mx-auto rounded-md mt-1 lg:mt-4 lg:bg-cyan-700 lg:bg-opacity-60">
                        <div className="flex flex-col lg:flex-row gap-10 py-8 justify-center items-center font-[poppins] font-semibold text-gray-200">
                            {loading === true ? <Loading /> : products.map((product) => (
                                <ProductsHighlights
                                    key={product.id}
                                    name={product.name}
                                    img={product.img}
                                    price={product.price}
                                    promotion={product.promotion}
                                    promotionPercentage={product.promotionPercentage}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <SeparatorLine />

                {/* categories */}
                <div>
                    <h3 className="text-gray-200 text-center font-['Roboto'] font-medium text-3xl">Categorias</h3>
                    <div className="w-80 lg:w-full h-auto mx-auto rounded-md mt-1 lg:mt-4">
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
        </>
    )
}

export default Home