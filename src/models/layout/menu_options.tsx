import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type MenuOptionType = {
    year: number,
    index: number,
    icon: string,
    route?: ReactNode
}

export const MenuOptions: MenuOptionType[] = [
    { index: 1, year: 2024, icon: "noto:fire", route: <Link to={"/2024/primerRegalo"}>Primer Regalo Repetido</Link> },
    { index: 2, year: 2024, icon: "emojione-v1:candle", route: <Link to={"/2024/enmarcandoNombres"}>Enmarcando Nombres</Link> },
    //{ index: 2, year: 2024, tittle: "edfef" },
    //{ index: 3, year: 2024, tittle: "edfef" },
]