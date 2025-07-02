import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages/homePage';
import { Routes2024 } from '../pages/2024/routes';
import { BadRequestPage } from '../pages/Page404';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/2024/*' element={<Routes2024 />} />
            <Route path="*" element={<BadRequestPage />} />
        </Routes>
    );
};