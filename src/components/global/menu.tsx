import { Icon } from '@iconify/react';
import { MenuOptions, type MenuOptionType } from '../../models/layout/menu_options';
import { useEffect, useState } from 'react';

type MenuProps = {
    year: number | null
}

export default function Menu({ year }: MenuProps) {

    const [items, setItems] = useState<MenuOptionType[]>([]);

    useEffect(() => {
        if (year !== null) {
            setItems(MenuOptions.filter((elem) => elem.year === year));
        }
    }, [year]);

    return (
        <nav className="bg-white shadow p-4 rounded-xl max-w-sm mx-auto mt-6">
            <ul className="space-y-4">
                {
                    items.length > 0 ?
                        MenuOptions.filter(elem => elem.year == year).map((item) => (
                            <li key={item.index}>
                                <div className="flex items-center gap-3 text-gray-700 hover:text-shadow-md">
                                    {item.icon && <Icon icon={item.icon} width="20" height="20" />}
                                    {item.route}
                                </div>
                            </li>
                        )) : <li>No Elements</li>}
            </ul>
        </nav>
    );
}
