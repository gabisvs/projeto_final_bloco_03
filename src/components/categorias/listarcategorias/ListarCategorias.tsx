// import { useEffect, useState } from "react";
// import Categoria from "../../../models/Categoria";
// import { listar } from "../../../services/Service";
// import CardCategorias from "../cardcategorias/CardCategorias";
// import { DNA } from 'react-loader-spinner';

// function ListarCategorias() {

//     const [categorias, setCategorias] = useState<Categoria[]>([]);

//     async function buscarCategorias() {

//         try {
//             await listar('/categorias', setCategorias);
//         } catch (error: any) {
//             alert('Erro ao listar as Categorias!')
//         }
//     }

//     useEffect(() => {
//         buscarCategorias();
//     }, [categorias.length]);

//     return (
//         <>
//             {categorias.length === 0 && (
//                 <DNA
//                     visible={true}
//                     height="200"
//                     width="200"
//                     ariaLabel="dna-loading"
//                     wrapperStyle={{}}
//                     wrapperClass="dna-wrapper mx-auto"
//                 />
//             )}


            
//             <div className="
//                 bg-gray-200 
//                 flex 
//                 justify-center
//                 ">
//                 <div className="my-4 container flex flex-col">

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//                         {categorias.map((categoria) => (
//                             <CardCategorias key={categoria.id} categoria={categoria} />
//                         ))}

//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ListarCategorias;

import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { listar } from "../../../services/Service";
import CardCategorias from "../cardcategorias/CardCategorias";

function ListarCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await listar('/categorias', setCategorias);
        } catch (error: any) {
            alert('Erro ao listar as Categorias!');
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <>
            {categorias.length === 0 && (
                <div className="flex justify-center w-full my-4">
                    <div className="container flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map((_, index) => (
                                <div key={index} className="border flex flex-col rounded-2xl overflow-hidden justify-between bg-white shadow-md animate-pulse">
                                    <header className="py-2 px-6 bg-customBlue text-white font-bold text-2xl">Categoria</header>
                                    <div className="p-8 bg-sky-50 flex-grow">
                                        <div className="h-4 bg-slate-700 rounded w-3/4 mb-4"></div>
                                        <div className="h-3 bg-slate-700 rounded w-full mb-2"></div>
                                        <div className="h-3 bg-slate-700 rounded w-5/6"></div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-full font-bold text-slate-100 bg-slate-500 flex items-center justify-center py-2">
                                            <div className="h-4 bg-slate-500 rounded w-1/3"></div>
                                        </div>
                                        <div className="w-full font-bold text-slate-100 bg-slate-600 flex items-center justify-center">
                                            <div className="h-4 bg-slate-600 rounded w-1/3"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-gray-200 flex justify-center">
                <div className="my-4 container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListarCategorias;
