import { useState, useEffect } from 'react';

const images = [
  { id: 1, src: 'https://ik.imagekit.io/gabi12015/projeto%20farmacia/Termometro-Clinico-Digital-.webp?updatedAt=1723214413022', title: 'Promoção 1' },
  { id: 2, src: 'https://ik.imagekit.io/gabi12015/projeto%20farmacia/Whey-Protein-Morango-900g.webp?updatedAt=1723214412425', title: 'Promoção 2' },
  { id: 3, src: 'https://ik.imagekit.io/gabi12015/projeto%20farmacia/Omega-3.png?updatedAt=1723214411314', title: 'Promoção 3' },
  { id: 4, src: 'https://ik.imagekit.io/gabi12015/projeto%20farmacia/Suplemento-Vitaminico-Vitamina-C-1000mg.webp?updatedAt=1723214411271', title: 'Promoção 4' },
  { id: 5, src: 'https://ik.imagekit.io/gabi12015/projeto%20farmacia/Shampoo-Anticaspa-Head-e-Shoulders.png?updatedAt=1723214411276', title: 'Promoção 5' },
  { id: 6, src: 'https://ik.imagekit.io/gabi12015/projeto%20farmacia/centrum-multivitaminico.webp?updatedAt=1723214411107', title: 'Promoção 6' },
  { id: 7, src: 'https://ik.imagekit.io/gabi12015/projeto%20farmacia/buprofeno-Capsula-400mg.webp?updatedAt=1723214411242', title: 'Promoção 7' },
  { id: 8, src: 'https://ik.imagekit.io/gabi12015/projeto%20farmacia/escova-dental-oral-b-classic-macia.webp?updatedAt=1723214411290', title: 'Promoção 8' },
  { id: 9, src: 'https://ik.imagekit.io/gabi12015/projeto%20farmacia/desodorante-roll-on.webp?updatedAt=1723214411218', title: 'Promoção 9' },
  { id: 10, src: 'https://ik.imagekit.io/gabi12015/projeto%20farmacia/sabonete-liquido-nivea-250ml.webp?updatedAt=1723214411307', title: 'Promoção 10' },
];

function Carousel(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage = 5; // Quantas imagens você quer exibir por vez

  const nextSlide = (): void => {
    const isLastSlide = currentIndex + itemsPerPage >= images.length;
    const newIndex = isLastSlide ? 0 : currentIndex + itemsPerPage;
    setCurrentIndex(newIndex);
  };

  const prevSlide = (): void => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - itemsPerPage : currentIndex - itemsPerPage;
    setCurrentIndex(newIndex);
  };

  // Autoplay: Move para o próximo slide automaticamente a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Tempo de transição: 3 segundos

    return () => {
      clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full pt-4"> {/* Adicionada margem superior */}
      {/* Botão Esquerdo */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-2xl bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10"
      >
        ❮
      </button>

      {/* Imagens em blocos */}
      <div className="flex justify-between px-4 overflow-hidden">
        {images.slice(currentIndex, currentIndex + itemsPerPage).map((image) => (
          <div key={image.id} className="w-1/5 px-2">
            <img src={image.src} alt={image.title} className="w-full h-full object-cover border" /> {/* Adicionada borda às imagens */}
            <p className="text-center mt-2">{image.title}</p>
          </div>
        ))}
      </div>

      {/* Botão Direito */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-2xl bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10"
      >
        ❯
      </button>

      {/* Indicadores de navegação */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(images.length / itemsPerPage) }).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerPage)}
            className={`cursor-pointer w-3 h-3 mx-1 rounded-full ${
              currentIndex === index * itemsPerPage ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;




