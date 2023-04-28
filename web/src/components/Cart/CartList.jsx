export default function CartList({ product }) {

    function GetPrice() {

        const formatter = Intl.NumberFormat("pt-BR", {
            compactDisplay: "long",
            currency: "BRL",
            style: "currency"
        });

        let finalPrice = 0;

        if (product.promotion === true) {
            const calcPrice = product.price - (product.price * (product.promotionPercentage / 100))

            return (
                <div className="text-cyan-300 xs2:text-xs font-[Poppins] font-semibold">

                    {formatter.format(calcPrice)}
                </div>
            )
        }
    }

    return (
        <>
            <div className="flex gap-3 justify-between items-start">

                <div className="flex font-[Poppins] gap-4">
                    <img src={product.img} className="w-28 xs1:w-16 lg:w-48 h-auto rounded-md" />
                    <div className="flex flex-col">
                        <h3 className="xs1:w-36 text-cyan-100 font-semibold xs2:text-xs">{product.name}</h3>
                    </div>
                </div>

                <GetPrice />

            </div>

        </>
    )
}