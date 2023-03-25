import Header from "../components/Header"
import BottomHeader from "../components/BottomHeader"
import SeparatorLine from "../components/SeparatorLine"
import welcomeImg from "/images/welcome.jpg"
import Highlights from "../components/Home/Highlights"
import Category from "../components/Home/Category"
import Footer from "../components/Footer"

function Home() {
    return (
        <>
            <Header />
            <BottomHeader />
            <main className="container mx-auto my-10 grid gap-12 justify-center items-center">
                <img src={welcomeImg} className="rounded-md mx-auto w-screen p-6 sm2:w-full sm2:p-0 md:p-0 h-auto" />
                <SeparatorLine />
                <Highlights />
                <SeparatorLine />
                <Category />
            </main>
            <Footer />
        </>
    )
}

export default Home