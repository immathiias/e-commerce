import CategoryList from "./CatogoryList";

export default function Category() {
    return (
        <div className="w-">
        <h3 className="text-gray-200 font-['Roboto'] font-medium text-xl">Categorias</h3>
        <div className="w-full h-auto rounded-md mt-4">
            <CategoryList />
        </div>
    </div>
    )
}