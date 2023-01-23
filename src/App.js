import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import Cadastro from "./components/Cadastro";
import NovaEntrada from "./components/NovaEntrada";
import NovaSaida from "./components/NovaSaida";
import Home from "./components/Home";
import UserProvider from "./contexts/UserContext";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <UserProvider>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/nova-entrada" element={<NovaEntrada />} />
                        <Route path="/nova-saida" element={<NovaSaida />} />
                    </Routes>
                </UserProvider>
            </BrowserRouter>
        </>
    )
}