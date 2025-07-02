import { Link } from "react-router";

export default function Header() {
    return (
        <header className="bg-black text-white px-6 py-4 shadow-md">
            <Link to="/">
                <h1 className="text-xl font-bold">Resolved AdventJs with React</h1>
            </Link>
        </header>
    );
}
