import { useState } from 'react';
import { Link } from 'react-router-dom';

import amarilis from '../../components/conteudo/Imagens/cards/amarilis.jpeg';
import azaleia from '../../components/conteudo/Imagens/cards/azaleia.jpg';
import camelia from '../../components/conteudo/Imagens/cards/camelia.png';
import ciclame from '../../components/conteudo/Imagens/cards/ciclame.webp';
import dalia from '../../components/conteudo/Imagens/cards/dalia.webp';
import gardenia from '../../components/conteudo/Imagens/cards/gardenia.png';
import girassol from '../../components/conteudo/Imagens/cards/girassol.jpg';
import helleborus from '../../components/conteudo/Imagens/cards/helleborus.webp';
import hibisco from '../../components/conteudo/Imagens/cards/hibisco.webp';
import lavanda from '../../components/conteudo/Imagens/cards/lavanda.webp';
import lirio from '../../components/conteudo/Imagens/cards/lirio.png';
import margarida from '../../components/conteudo/Imagens/cards/margarida.webp';
import orquidea from '../../components/conteudo/Imagens/cards/orquidea.jpg';
import rosa from '../../components/conteudo/Imagens/cards/rosa.jpg';
import tulipa from '../../components/conteudo/Imagens/cards/tulipa.webp';
import violeta from '../../components/conteudo/Imagens/cards/violeta.webp';

import { Navbar, Footer } from '../../components';

const especies = [
  { nome: "Amarílis",
     descricao: "Floresce no inverno com grandes pétalas e cores vivas. Ideal para cultivo interno em vasos.", 
     imagem: amarilis, 
     link: "/DetPlantaFlor/DetFlor/Amarilis",
     tags: ['❄️', '🌿'] 
  },
  { nome: "Azaleia", 
    descricao: "Arbusto ornamental que encanta com flores delicadas e cores suaves. Ideal para áreas sombreadas e solo ácido.", 
    imagem: azaleia, 
    link: "/DetPlantaFlor/DetFlor/Azaleia", 
    tags: ['☀️'] 
  },
  { nome: "Camélia", 
    descricao: "Floresce no inverno com cores vibrantes e textura aveludada. Adapta-se bem a solos ácidos.", 
    imagem: camelia, 
    link: "/DetPlantaFlor/DetFlor/Camelia", 
    tags: ['❄️', '🌸'] 
  },
  { nome: "Ciclame", 
    descricao: "Flor resistente ao frio, perfeita para ambientes internos durante o inverno.", 
    imagem: ciclame, 
    link: "/DetPlantaFlor/DetFlor/Ciclome", 
    tags: ['❄️', '🌿'] 
  },
  { nome: "Dália", 
    descricao:  "Flor ornamental com pétalas volumosas e cores marcantes. Requer solo bem drenado e sol pleno.", 
    imagem: dalia, 
    link: "/DetPlantaFlor/DetFlor/Dalia", 
    tags: ['☀️', '🌸'] 
  },
  { nome: "Gardênia", 
    descricao: "Flor tropical com aroma intenso, ideal para climas quentes. Prefere solo bem drenado e luz indireta.", 
    imagem: gardenia, 
    link: "/DetPlantaFlor/DetFlor/Gardenia", 
    tags: ['🌿', '🌸'] 
  },
  { nome: "Girassol", 
    descricao: "Flor solar que simboliza alegria e energia positiva. Cresce rapidamente em áreas ensolaradas.", 
    imagem: girassol, 
    link: "/DetPlantaFlor/DetFlor/Girassol", 
    tags: ['☀️'] 
  },
  { nome: "Helleborus", 
    descricao: "Também chamada de rosa-do-inverno, floresce mesmo em climas frios rigorosos.", 
    imagem: helleborus, 
    link: "/DetPlantaFlor/DetFlor/Helleborus", 
    tags: ['❄️', '🌸'] 
  },
  { nome: "Hibisco", 
    descricao: "Flor exuberante e tropical, com pétalas grandes e vibrantes. Precisa de rega abundante no verão.", 
    imagem: hibisco, 
    link: "/DetPlantaFlor/DetFlor/Hibisco", 
    tags: ['☀️'] 
  },
  { nome: "Lavanda", 
    descricao: "Aroma calmante e folhas prateadas, ótima para jardins secos. Floresce no verão.", 
    imagem: lavanda, 
    link: "/DetPlantaFlor/DetFlor/Lavanda", 
    tags: ['☀️']
  },
  { nome: "Lírio", 
    descricao: "Símbolo de pureza, com pétalas elegantes e perfumadas. Requer rega moderada e solo fértil.", 
    imagem: lirio, 
    link: "/DetPlantaFlor/DetFlor/Lirio", 
    tags: ['🌸'] 
  },
  { nome: "Margarida", 
    descricao: "Simplicidade e beleza em pétalas brancas e miolo amarelo. Resistente a solos pobres.", 
    imagem: margarida, 
    link: "/DetPlantaFlor/DetFlor/Margarida", 
    tags: ['☀️'] 
  },
  { nome: "Orquídea", 
    descricao: "Exótica e sofisticada, símbolo de beleza rara. Necessita de alta umidade e luz filtrada.", 
    imagem: orquidea, 
    link: "/DetPlantaFlor/DetFlor/Orquidea", 
    tags: ['🌿', '🌸'] 
  },
  { nome: "Rosa", 
    descricao: "Clássica e romântica, conhecida por sua variedade de cores. Exige poda regular para um crescimento saudável.", 
    imagem: rosa, 
    link: "/DetPlantaFlor/DetFlor/Rosa", 
    tags: ['☀️', '🌸'] 
  },
  { nome: "Tulipa", 
    descricao: "Delicada e colorida, muito cultivada em climas frios. Bulbos devem ser plantados no outono.", 
    imagem: tulipa, 
    link: "/DetPlantaFlor/DetFlor/Tulipa", 
    tags: ['❄️', '🌸'] 
  },
  { nome: "Violeta-africana", 
    descricao: "Compacta e delicada, é uma excelente flor de interior durante o inverno.", 
    imagem: violeta, 
    link: "/DetPlantaFlor/DetFlor/Violeta", 
    tags: ['🌿', '❄️'] 
  }
];

const filtros = {
  "🌿": "Ambientes Internos",
  "☀️": "Ambientes Externos / Sol Pleno",
  "❄️": "Flores de Inverno / Resistentes ao Frio",
  "🌸": "Plantas Ornamentais Clássicas"
};

const Flores = () => {
  const [filtroSelecionado, setFiltroSelecionado] = useState(null);

  const especiesFiltradas = filtroSelecionado
    ? especies.filter(planta => planta.tags.includes(filtroSelecionado))
    : especies;

  return (
    <>
      <Navbar />
      <div className="cardsT">
        <h1 className="titulo-plantas">Espécies de Flores</h1>

        <div className="filtros">
          {Object.entries(filtros).map(([emoji, label]) => (
            <button
              key={emoji}
              className={`botao-filtro ${filtroSelecionado === emoji ? 'ativo' : ''}`}
              onClick={() =>
                setFiltroSelecionado(filtroSelecionado === emoji ? null : emoji)
              }
            >
              {emoji} {label}
            </button>
          ))}
        </div>

        <div className="galeria-cards">
          {especiesFiltradas.map((planta, index) => (
            <div className="card" key={index}>
              <Link to={planta.link} className="card-link">
              <img src={planta.imagem} alt={planta.nome} className="card-img" />
              <div className="card-conteudo">
                <h3 className="card-titulo">{planta.nome}</h3>
                <p className="card-descricao">{planta.descricao}</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Flores };
