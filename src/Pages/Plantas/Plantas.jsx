import { useState } from 'react';
import { Link } from 'react-router-dom';

import agave from '../../components/conteudo/Imagens/cards/agave.webp';
import aloeVera from '../../components/conteudo/Imagens/cards/aloe.jpg';
import cacto from '../../components/conteudo/Imagens/cards/cacto.webp';
import costelaDeAdao from '../../components/conteudo/Imagens/cards/costela.jpg';
import espadaDeSaoJorge from '../../components/conteudo/Imagens/cards/espada.jpg';
import jiboia from '../../components/conteudo/Imagens/cards/jiboia.jpg';
import pacova from '../../components/conteudo/Imagens/cards/pacova.jpg';
import peperomia from '../../components/conteudo/Imagens/cards/peperomia.jpg';
import samambaia from '../../components/conteudo/Imagens/cards/samambaia.webp';
import zamioculca from '../../components/conteudo/Imagens/cards/zamioculca.jpg';

import { Navbar, Footer } from '../../components';

const plantas = [
  { nome: "Agave", descricao: "Folhagem escultural e resistente ao calor intenso. Perfeita para jardins áridos e externos.", 
    imagem: agave, 
    link: "/DetPlantaFlor/DetPlanta/Agave", 
    tags: ['☀️'] 
  },
  { nome: "Aloe Vera (Babosa)", descricao: "Planta medicinal e suculenta, ótima para sol pleno e com pouca rega.", 
    imagem: aloeVera, 
    link: "/DetPlantaFlor/DetPlanta/Barbosa", 
    tags: ['☀️'] 
  },
  { nome: "Cacto", descricao: "Planta suculenta altamente resistente à seca, ideal para ambientes externos ensolarados.", 
    imagem: cacto, 
    link: "/DetPlantaFlor/DetPlanta/Cacto", 
    tags: ['☀️'] 
  },
  { nome: "Costela-de-Adão", 
    descricao: "Folhagem exuberante e moderna, bastante usada em decoração de interiores.", 
    imagem: costelaDeAdao, 
    link: "/DetPlantaFlor/DetPlanta/Costela", 
    tags: ['🌿', '☀️'] 
  },
  { nome: "Espada-de-São-Jorge", 
    descricao: "Planta resistente e purificadora de ar. Ideal para ambientes internos com pouca luz.", 
    imagem: espadaDeSaoJorge, 
    link: "/DetPlantaFlor/DetPlanta/Espada", 
    tags: ['🌿'] 
  },
  { nome: "Jiboia", 
    descricao: "Trepadeira ornamental de fácil cultivo. Pode ser usada pendente ou com suporte.", 
    imagem: jiboia, 
    link: "/DetPlantaFlor/DetPlanta/Jiboia", 
    tags: ['🌿', '☀️'] 
  },
  { nome: "Pacová", 
    descricao: "Planta tropical com folhas largas e brilhantes, ideal para salas iluminadas.", 
    imagem: pacova, 
    link: "/DetPlantaFlor/DetPlanta/Pacova", 
    tags: ['🌿', '☀️'] 
  },
  { nome: "Peperômia", 
    descricao: "Compacta e ideal para pequenos espaços, com variedade de formas e texturas.", 
    imagem: peperomia, 
    link: "/DetPlantaFlor/DetPlanta/Peperomia", 
    tags: ['🌿'] 
  },
  { nome: "Samambaia", 
    descricao: "Clássica de interiores, ama sombra e umidade. Ideal para varandas.", 
    imagem: samambaia, 
    link: "/DetPlantaFlor/DetPlanta/Samambaia", 
    tags: ['🌿', '☀️'] 
  },
  { nome: "Zamioculca", 
    descricao: "Fácil de cuidar e tolerante à baixa luminosidade. Perfeita para escritórios e salas.", 
    imagem: zamioculca, 
    link: "/DetPlantaFlor/DetPlanta/Zamioculca", 
    tags: ['🌿'] 
  }
];

const filtros = {
  "🌿": "Ambientes Internos",
  "☀️": "Ambientes Externos / Sol Pleno",
};

const Plantas = () => {
  const [filtroSelecionado, setFiltroSelecionado] = useState(null);

  const plantasFiltradas = filtroSelecionado
    ? plantas.filter(planta => planta.tags.includes(filtroSelecionado))
    : plantas;

  return (
    <>
      <Navbar />
      <div className="cardsT">
        <h1 className="titulo-plantas">Plantas Ornamentais</h1>

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
          {plantasFiltradas.map((planta, index) => (
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

export { Plantas };