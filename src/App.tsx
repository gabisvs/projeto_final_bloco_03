import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import ListarCategorias from './components/categorias/listarcategorias/ListarCategorias';
import FormCategoria from './components/categorias/formcategoria/FormCategoria';
import DeletarCategoria from './components/categorias/deletarcategorias/DeletarCategoria';
import ListarProdutos from './components/produtos/listarprodutos/ListaProdutos';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='bg-gray-200 min-h-[68vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App