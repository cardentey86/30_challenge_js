import { Routes, Route } from 'react-router-dom';
import { PrimerRegaloPage } from './primerRegalo';

export const Routes2024 = () => {
    return (
        <Routes>
            <Route path="primerRegalo" element={<PrimerRegaloPage />} />
        </Routes>
    );
};