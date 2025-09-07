import Header from "./Header"
import Footer from "./Footer"
import React from "react"


interface LayoutProps{
    children:React.ReactNode
}

const Layout: React.FC<LayoutProps> =({children})=> {

    return(
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-grow">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;