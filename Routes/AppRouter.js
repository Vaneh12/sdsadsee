import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Bar from '../Graficos/Barra'
import Bar_1 from '../Graficos/Barra'

function AppRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/coluna" element={<Coluna />} />
                <Route path="/coluna_2" element={<Coluna_2 />} />
                <Route path="/coluna_3" element={<Coluna_3 />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/bar_1" element={<Bar_1 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter