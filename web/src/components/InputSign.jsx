export default function InputSign(props) {
    return (
        <input type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} required
            className="w-full h-auto py-1 px-2 bg-cyan-100 text-gray-600 font-medium bg-opacity-70 rounded border-b-4 border-cyan-500 
        placeholder:text-gray-600 placeholder:opacity-80 outline-0"
        />
    )
}