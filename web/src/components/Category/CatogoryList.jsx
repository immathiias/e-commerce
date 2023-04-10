import electronics from "/images/electronics.png"
import games from "/images/games.png"
import accessories from "/images/accessories.png"

export default function CategoryList(props) {
    return (
        <div className="flex flex-col gap-1 items-center cursor-pointer hover:scale-105 hover:opacity-80 transition ease-in-out duration-300">
            <img src={props.img} className="w-80 lg:w-60 xs1:w-60 h-auto rounded" />
            <div className="text-cyan-100 font-semibold text-2xl">{props.name}</div>
        </div>
    )
}