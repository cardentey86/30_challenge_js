import { Routes, Route } from 'react-router-dom';
import { PrimerRegaloPage } from './primerRegalo';
import { EnmarcandoNombres } from './enmarcandoNombres';

export const Routes2024 = () => {
    return (
        <Routes>
            <Route path="primerRegalo" element={<PrimerRegaloPage />} />
            <Route path="enmarcandoNombres" element={<EnmarcandoNombres />} />
        </Routes>
    );
};