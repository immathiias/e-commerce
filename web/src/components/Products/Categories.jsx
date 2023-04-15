import ProductsList from "./ProductsList";

export function Categories({ data }) {
    return (
        <div>
            {data.filter(product => product.categoryId === 1).length > 0 ? (
                <div className="grid">
                    <h3 className="text-cyan-300 font-['Roboto'] font-medium text-3xl">Eletrônicos</h3>

                    <div className="flex flex-col lg:flex-row flex-grow gap-10 py-8 justify-start items-center font-[poppins] font-semibold text-gray-200">
                        {data.filter(product => product.categoryId === 1).map((product) => (
                            <ProductsList
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                img={product.img}
                                price={product.price}
                                promotion={product.promotion}
                                promotionPercentage={product.promotionPercentage}
                            />
                        ))}
                    </div>
                </div>
            )
                : ''}
            {data.filter(product => product.categoryId === 2).length > 0 ? (
                <div className="grid">
                    <h3 className="text-cyan-300 font-['Roboto'] font-medium text-3xl">Jogos</h3>

                    <div className="flex flex-col lg:flex-row flex-grow gap-10 py-8 justify-start items-center font-[poppins] font-semibold text-gray-200">
                        {data.filter(product => product.categoryId === 2).map((product) => (
                            <ProductsList
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                img={product.img}
                                price={product.price}
                                promotion={product.promotion}
                                promotionPercentage={product.promotionPercentage}
                            />
                        ))}
                    </div>
                </div>
            )
                : ''}
            {data.filter(product => product.categoryId === 3).length > 0 ? (
                <div className="grid">
                    <h3 className="text-cyan-300 font-['Roboto'] font-medium text-3xl">Acessórios</h3>

                    <div className="flex flex-col lg:flex-row flex-grow gap-10 py-8 justify-start items-center font-[poppins] font-semibold text-gray-200">
                        {data.filter(product => product.categoryId === 3).map((product) => (
                            <ProductsList
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                img={product.img}
                                price={product.price}
                                promotion={product.promotion}
                                promotionPercentage={product.promotionPercentage}
                            />
                        ))}
                    </div>
                </div>
            )
                : ''}
        </div>
    )
}