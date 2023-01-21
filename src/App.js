import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import Cadastro from "./components/Cadastro";
import NovaEntrada from "./components/NovaEntrada";
import NovaSaida from "./components/NovaSaida";
import Home from "./components/Home";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/nova-entrada" element={<NovaEntrada />} />
                    <Route path="/nova-saida" element={<NovaSaida />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}