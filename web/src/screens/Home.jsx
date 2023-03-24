import BottomHeader from "../components/Home/BottomHeader"
import Header from "../components/Home/Header"
import Highlights from "../components/Home/Highlights"
import welcomeImg from "/images/welcome.jpg"

function Home() {
    return (
        <>
            <Header />
            <BottomHeader />
            <main className="my-10 grid gap-12 justify-center items-center">
                <img src={welcomeImg} className="rounded-md" />
                <Highlights />

            </main>
        </>
    )
}

export default Home