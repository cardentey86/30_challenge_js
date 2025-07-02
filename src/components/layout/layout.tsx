import Header from "./header";
import Sidebar from "./sidebar";

type LayoutProps = {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />

            <div className="flex flex-1 overflow-hidden">
                <Sidebar />

                <main className="flex-1 p-6 overflow-y-auto bg-white">
                    {children}
                </main>
            </div>
        </div>
    )
}