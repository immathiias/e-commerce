export const Price = (props) => {
    const formatter = Intl.NumberFormat("pt-BR", {
        compactDisplay: "long",
        currency: "BRL",
        style: "currency"
    });

    if (props.promotion === true) {
        const calcPrice = props.price - (props.price * (props.promotionPercentage / 100))
        return (
            <div className={`${props.style01}`}>
                <div className={`${props.style02}`}>
                    De {formatter.format(props.price)}
                </div>
                Por {formatter.format(calcPrice)} <span className="text-gray-200">no PIX</span>
            </div>
        )
    }
    return (
        <div className={`${props.style03}`}>
            {formatter.format(props.price)} <span className="text-gray-200">no PIX</span>
        </div>
    )
}