import electronics from "/images/electronics.png"
import games from "/images/games.png"
import accessories from "/images/accessories.png"

export default function CategoryList() {
    return (
        <div className="flex gap-10 font-[poppins]">
            {/* Electronics */}
            <div className="flex flex-col gap-1 items-center cursor-pointer hover:scale-105 transition">
                <img src={electronics} className="w-80 h-auto rounded" />
                <div className="text-cyan-100 font-semibold text-2xl">Eletrônicos</div>
            </div>

            {/* Games */}
            <div className="flex flex-col gap-1 items-center cursor-pointer hover:scale-105 transition">
                <img src={games} className="w-80 h-auto rounded" />
                <div className="text-cyan-100 font-semibold text-2xl">Games</div>
            </div>

            {/* Accessories */}
            <div className="flex flex-col gap-1 items-center cursor-pointer hover:scale-105 transition">
                <img src={accessories} className="w-80 h-auto rounded" />
                <div className="text-cyan-100 font-semibold text-2xl">Acessórios</div>
            </div>
        </div>
    )
}