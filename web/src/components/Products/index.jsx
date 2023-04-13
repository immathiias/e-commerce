import { useState, useEffect } from "react";

import Header from "../Header";
import ProductsList from "./ProductsList";
import Loading from "../Loading";

import api from "../../services/api";

export default function Products() {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchAPI() {
            const response = await api.get('/products')

            setProducts(response.data)
            setLoading(false)
        }

        fetchAPI()
    }, [])
    return (
        <>
            <Header />

            <main className="container mx-auto my-10 grid gap-12 justify-center items-center">
                <div className="grid gap-2">
                    <div className="text-gray-200 font-['Roboto'] font-medium text-3xl">Mais vendidos</div>
                    <div className="flex flex-col lg:flex-row gap-10 py-8 justify-center items-center font-[poppins] font-semibold text-gray-200">
                        {loading === true ? <Loading /> : products.slice(0, 4).
                            sort((a, b) => { return b.solds - a.solds }).map((product, i) => (
                                <ProductsList
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    img={product.img}
                                    price={product.price}
                                    promotion={product.promotion}
                                    promotionPercentage={product.promotionPercentage}
                                    bestsellers={true}
                                    positionSold={i+1}
                                />
                            ))
                        }
                    </div>
                </div>
            </main>
        </>
    )
}