import { ReactNode } from "react";
import Navbar from "../partials/navbar";
import Footer from "../partials/footer";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <nav>
                <Navbar />
            </nav>

            <main>
                {children}
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}