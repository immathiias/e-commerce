import BottomHeader from "../components/Home/BottomHeader"
import Category from "../components/Home/Category"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Highlights from "../components/Home/Highlights"
import welcomeImg from "/images/welcome.jpg"

function Home() {
    return (
        <>
            <Header />
            <BottomHeader />
            <main className="container mx-auto my-10 grid gap-12 justify-center items-center">
                <img src={welcomeImg} className="rounded-md w-full h-auto" />
                <Highlights />
                <Category />

            </main>
            <Footer />
        </>
    )
}

export default Home