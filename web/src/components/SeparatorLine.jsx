export default function SeparatorLine() {
    return (
        <div className="flex flex-col gap-1 xs2:items-center">
            <div className="w-full -ml-4 h-[2px] xs2:w-80 xs1:w-60 bg-gradient-to-r from-cyan-500 to-cyan-300" />
            <div className="w-full ml-4 h-[2px] xs2:w-80 xs1:w-60 bg-gradient-to-r from-cyan-500 to-cyan-300" />
        </div>

    )
}