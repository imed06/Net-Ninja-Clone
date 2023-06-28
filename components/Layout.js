import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Poppins } from "next/font/google"

const poppins = Poppins({
    weight: ['300','400','500','600', '700'],
    subsets: ['latin'] 
})

export default function Layout({
    children, // will be a page or nested layout
}) {
    return (
        <div className={`flex flex-col justify-between w-full h-full ${poppins.className}`}>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}