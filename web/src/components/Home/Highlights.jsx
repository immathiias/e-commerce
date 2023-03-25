import ProductsHighlights from "./ProductsHighlights";

export default function Highlights() {
    return (
        <div>
            <h3 className="text-gray-200 text-center font-['Roboto'] font-medium text-3xl">Destaques</h3>
            <div className="w-full h-auto mx-auto rounded-md mt-1 lg:mt-4 lg:bg-cyan-700 lg:bg-opacity-60">
                <ProductsHighlights />
            </div>
        </div>
    )
}