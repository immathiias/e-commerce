import Header from "../Header"
import BottomHeader from "../BottomHeader"
import SeparatorLine from "../SeparatorLine"
import welcomeImg from "/images/welcome.jpg"
import Highlights from "./Highlights"
import Category from "./Category"
import Footer from "../Footer"

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