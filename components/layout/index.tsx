import { ReactNode } from "react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import('../partials/navbar'), { ssr: false })

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
        </div>
    )
}