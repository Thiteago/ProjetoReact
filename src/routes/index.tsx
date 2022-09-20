import {HashRouter, Route, Routes} from 'react-router-dom'
import {Home} from "../pages/Home"
import { MandeSuaIdeia } from '../pages/MandeSuaIdeia';
import { Produtos } from '../pages/Produtos';
import { Sobre } from '../pages/Sobre';
import { Login } from '../pages/Login';
import { Venda } from '../pages/Venda';
import { Register } from '../pages/Register'
import { Perfil } from '../pages/Perfil/Perfil';
import { AuthProvider } from '../context/auth';
import { PrivateRoutes } from './privateRoutes';


export const RoutesApp = () => {
    return(
        <HashRouter>
            <AuthProvider>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Produtos" element={<Produtos/>}/>
                <Route path="/MandeSuaIdeia" element={<MandeSuaIdeia/>}/>
                <Route path="/Sobre" element={<Sobre/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Registro" element={<Register/>}/>
                <Route path="/Venda" element={<Venda/>}/>
                <Route path="/Perfil" element={<PrivateRoutes/>}>
                    <Route path="/Perfil" element={<Perfil/>}/>
                </Route>
            </Routes>
            </AuthProvider>
    </HashRouter>
    )
}