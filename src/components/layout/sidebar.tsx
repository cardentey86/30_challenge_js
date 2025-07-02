import { useState } from 'react';
import Menu from '../global/menu';

export default function Sidebar() {

    const [year, setYear] = useState<number | null>(null);

    function changeYear(newYear: number) {
        setYear(newYear);
    }

    return (
        <aside className="w-auto bg-gray-100 h-full shadow-md px-4 py-6 hidden md:block">
            <select onChange={e => changeYear(Number(e.target.value))}>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
            </select>

            <Menu year={year} />

        </aside>
    );
}
