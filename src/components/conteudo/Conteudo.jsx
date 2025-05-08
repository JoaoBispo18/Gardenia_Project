import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import Slide1 from './Imagens/carrossel/1.png';
import Slide2 from './Imagens/carrossel/2.png';
import Slide3 from './Imagens/carrossel/3.png';

import Gardenia from './Imagens/cards/gardenia.png';
import lirio from './Imagens/cards/lirio.png';
import camelia from './Imagens/cards/camelia.png';
import amarilis from './Imagens/cards/amarilis.jpeg';
import ciclame from './Imagens/cards/ciclame.webp';
import helleborus from './Imagens/cards/helleborus.webp';
import violeta from './Imagens/cards/violeta.webp';

const plantas = [
  {
    nome: "Gardênia",
    descricao: "Uma flor perfumada de clima tropical.",
    imagem: Gardenia,
    link: "/DetPlantaFlor/DetFlor/Gardenia"
  },
  {
    imagem: lirio,
    nome: 'Lírio',
    descricao: 'Flor elegante que simboliza pureza e renascimento.',
    link: "/DetPlantaFlor/DetFlor/Lirio"
  },
  {
    imagem: camelia,
    nome: 'Camélia',
    descricao: 'Flor colorida que floresce no inverno e primavera.',
    link: "/DetPlantaFlor/DetFlor/Camelia"
  },
];

const inverno = [
  {
    nome: "Amarílis",
    descricao: "Floresce no inverno com grandes pétalas e cores vivas. Ideal para cultivo interno em vasos.",
    imagem: amarilis,
    link: "/DetPlantaFlor/DetFlor/Amarilis"
  },
  {
    nome: "Camélia",
    descricao: "Floresce no inverno com cores vibrantes e textura aveludada. Adapta-se bem a solos ácidos.",
    imagem: camelia,
    link: "/DetPlantaFlor/DetFlor/camelia"
  },
  {
    nome: "Ciclame",
    descricao: "Flor resistente ao frio, perfeita para ambientes internos durante o inverno.",
    imagem: ciclame,
    link: "/DetPlantaFlor/DetFlor/ciclame"
  },
  {
    nome: "Helleborus",
    descricao: "Também chamada de rosa-do-inverno, floresce mesmo em climas frios rigorosos.",
    imagem: helleborus,
    link: "/DetPlantaFlor/DetFlor/helleborus"
  },
  {
    nome: "Violeta-africana",
    descricao: "Compacta e delicada, é uma excelente flor de interior durante o inverno.",
    imagem: violeta,
    link: "/DetPlantaFlor/DetFlor/violeta"
  }
];

const Conteudo = () => {
  return (
    <>
      {/* Carrossel */}
      <div className="carrossel-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <Link to="/DetPlantaFlor/DetFlor/Camelia">
              <div className="img-wrapper">
                <img src={Slide1} alt="Gardenia" className="img-carrossel" />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/DetPlantaFlor/DetFlor/Girassol">
              <div className="img-wrapper">
                <img src={Slide2} alt="Lírio" className="img-carrossel" />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/DetPlantaFlor/DetFlor/Gardenia">
              <div className="img-wrapper">
                <img src={Slide3} alt="Camélia" className="img-carrossel" />
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Cards - Mais procurados */}
      <div className="cardsT">
        <h1 className='titulo-plantas'>Mais procurados</h1>
        <div className="galeria-cards">
          {plantas.map((planta, index) => (
            <Link to={planta.link} key={index} className="card-link">
              <div className="card">
                <img src={planta.imagem} alt={planta.nome} className="card-img" />
                <div className="card-conteudo">
                  <h3 className="card-titulo">{planta.nome}</h3>
                  <p className="card-descricao">{planta.descricao}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Cards - Plantas de Inverno */}
      <div className="cardsT">
        <h1 className='titulo-plantas'>Plantas para o Inverno</h1>
        <div className="galeria-cards">
          {inverno.map((planta, index) => (
            <Link to={planta.link} key={index} className="card-link">
              <div className="card">
                <img src={planta.imagem} alt={planta.nome} className="card-img" />
                <div className="card-conteudo">
                  <h3 className="card-titulo">{planta.nome}</h3>
                  <p className="card-descricao">{planta.descricao}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export { Conteudo };
