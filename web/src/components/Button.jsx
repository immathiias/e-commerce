export default function Button(props) {
    const bgColor = props.color === 'light' ? 'bg-cyan-100' : 'bg-cyan-500'
    const textColor = props.color === 'light' ? 'text-cyan-500' : 'text-cyan-100'

    return (
        <button className={`flex justify-center items-center w-${props.w} h-${props.h} p-${props.p} mt-${props.mt} ${textColor} ${bgColor} text-${props.fontSize} rounded hover:opacity-80 transition`}>
            {props.icon}{props.text}
        </button>
    )
}