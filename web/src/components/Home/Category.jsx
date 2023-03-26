import CategoryList from "./CatogoryList";

export default function Category() {
    return (
        <div className="w-">
        <h3 className="text-gray-200 text-center font-['Roboto'] font-medium text-3xl">Categorias</h3>
        <div className="w-80 lg:w-full h-auto mx-auto rounded-md mt-1 lg:mt-4">
            <CategoryList />
        </div>
    </div>
    )
}