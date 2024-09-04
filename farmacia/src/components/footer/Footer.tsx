import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-gradient-to-b from-customBlue to-red-900 text-white">
                <div className="flex flex-col items-center py-4 container">
                    <p className='font-bold text-xl'>Farmácia VitaCare Generation | Copyright: {data}</p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        
                            <LinkedinLogo size={48} weight="fill" />
                            <InstagramLogo size={48} weight="fill" />
                            <FacebookLogo size={48} weight="fill" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer