import ProductsHighlights from "./ProductsHighlights";

export default function Highlights() {
    return (
        <div>
            <h3 className="text-gray-200 font-['Roboto'] font-medium text-xl">Destaques</h3>
            <div className="w-full h-auto rounded-md mt-4 bg-cyan-700 bg-opacity-60">
                <ProductsHighlights />
            </div>
        </div>
    )
}