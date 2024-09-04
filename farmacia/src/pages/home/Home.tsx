import Carousel from "../../components/produtos/Carousel"

function Home() {
    return (
        <>
            <div className="flex justify-center bg-customBlue">
                <div className='grid grid-cols-2 text-white container'>
                    <div className="flex flex-col justify-center items-center gap-4 py-4">
                        <h2 className='font-bold text-5xl'>
                            Seja Bem-vindo!
                        </h2>
                        <p className='text-xl'>Saúde em cada detalhe, cuidado em cada atendimento!</p>

                        <div className="flex justify-around gap-4">
                            <div className='border-2 text-whiteborder-white bg-customBlue px-4 py-2 border-solid rounded'>
                                Novo Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://ik.imagekit.io/gabi12015/projeto%20farmacia/image-Photoroom.png?updatedAt=1725459359518"
                            alt="Imagem Página Home"
                            className='w-3/4'
                        />
                    </div>
                </div>
            </div>
            <Carousel/>
        </>
    )
}

export default Home