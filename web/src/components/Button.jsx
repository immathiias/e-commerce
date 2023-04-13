export default function Button({ color, width, height, padding, mt, icon, text, fontSize, fontWeight, onClick }) {
    const bgColor = color === 'light' ? 'bg-cyan-100' : 'bg-cyan-500'
    const textColor = color === 'light' ? 'text-cyan-500' : 'text-cyan-100'

    return (
        <button onClick={onClick}
            className={`flex justify-center items-center ${width} ${height} ${padding} ${mt} ${textColor} ${bgColor} 
                text-${fontSize} font-${fontWeight} rounded hover:opacity-80 transition`}
        >
            {icon}{text}
        </button>
    )
}