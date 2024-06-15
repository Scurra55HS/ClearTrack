import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaHome from "../Components/PaginaHome/Home";
import Contato from "../Components/Contato/Contato";
import Sobre from "../Components/Sobre/Sobre";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Login from "../Components/Login/login";

const App = () => {
    return (
        <BrowserRouter>
        <Header/>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/sobre" element={<Sobre/>}/>
                    <Route path="/PaginaInicial" element={<PaginaHome/>}/>
                    <Route path="/contato" element={<Contato/>}/>
                </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default App;