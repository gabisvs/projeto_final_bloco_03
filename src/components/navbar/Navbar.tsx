import { User, ShoppingCart, MagnifyingGlass } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="flex justify-center bg-red-800 py-4 w-full text-white">
            <div className="flex justify-between items-center text-lg container">
                <Link to="/home">
                    <img
                        src="https://ik.imagekit.io/gabi12015/projeto%20farmacia/image.png?updatedAt=1725455433324"
                        alt="Logo"
                        className="w-14"
                    />
                
                </Link>

                <div className="relative flex flex-1 justify-center items-center w-30 text-black">
                    <form className="flex justify-center w-3/4">
                        <input
                            className="px-4 py-4 rounded-lg w-10/12 h-9 focus:outline-none"
                            type="search"
                            placeholder="Pesquisar produto"
                            id="busca"
                            name="busca"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-customBlue hover:bg-slate-500 p-2.5 border border-bg-customBlue rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-teal-800 w-9 h-9 font-medium text-sm text-white ms-2 focus:outline-none"
                        >
                            <MagnifyingGlass size={14} weight="bold" />
                        </button>
                    </form>
                </div>

                <div className="flex gap-2 items-center">
                    <Link to="/home" className="hover:underline font-semibold">Home</Link>
                    <Link to="/produtos" className="hover:underline font-semibold">Produtos</Link>
                    <Link to="/categorias" className="hover:underline font-semibold">Categorias</Link>
                    <Link to="/cadcategoria" className="hover:underline font-semibold">Cadastrar Categoria</Link>
                    <User size={32} weight="light" />
                    <ShoppingCart size={32} weight="light" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;

